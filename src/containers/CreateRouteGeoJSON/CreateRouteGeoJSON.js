/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React, {useState} from 'react';
import {Button, Header, Input, Label, RouteWrapper} from "./RouteGeoJSON.style";
import RouteToRdfParser from "../../utils/parser/RouteToRdfParser"
import Route from "../../utils/route/Route"
import {errorToaster, successToaster} from '@utils';
import {useTranslation} from "react-i18next";

type Props = {webId: String};

let markers = [];

let geojson = "";

const CreateRouteGeoJSON = ({ webId }: Props) => {
    const { t } = useTranslation();
    const webID = webId.replace("profile/card#me", "");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    let file = React.createRef();

    function parsergeojson(file) {
        var geoObject = JSON.parse(file);
        var features = [];
        features = geoObject.features;
        if(features.length === 1){
            if(features[0].geometry.type === "LineString"){
                var coordinates = features[0].geometry.coordinates;
                for(var i = 0; i< coordinates.length; i++){
                    markers.push({lat:coordinates[i][0], lng: coordinates[i][1]});
                }
            }
        }
    }

    function handleSave(event) {
        if (title.length === 0) {
            errorToaster(t('notifications.title'),t('notifications.error'));
        }else if(description.length === 0){
            errorToaster(t('notifications.description'),t('notifications.error'));
        } else {
            parsergeojson(geojson);
            let route = new Route(title, description, markers, webID, null, null, null);
            let parser = new RouteToRdfParser(route, webID);
            parser.parse();
            successToaster(t('notifications.save'),t('notifications.success'));
            window.location.href=`#/timeline`;
        }
        event.preventDefault();
    }

    function handleTitleChange(event) {
        event.preventDefault();
        setTitle(event.target.value);
    }

    function handleDescriptionChange(event) {
        event.preventDefault();
        setDescription(event.target.value);
    }

    function loaded(file) {
        geojson = file.target.result.toString();
    }
    function handleUpload(event) {
        event.preventDefault();
        var reader = new FileReader();
        reader.readAsText(file.current.files[0]);
        reader.onload = loaded;
    }

    return (
        <RouteWrapper>
            <Header>
                <h1 className={"text--white"}>Nueva Ruta</h1>
                <Label>Titulo</Label>
                <Input type="text" size="20" placeholder="Nueva ruta" onChange={handleTitleChange} />
                <Label>Descripcion</Label>
                <Input type="text" size="100" placeholder="Descripcion" onChange={handleDescriptionChange}/>
                <Label>Sube tu archivo GeoJSON</Label>
                <Input type="file" ref={file} onChange={handleUpload}/>
                <br/>
                <Button onClick={handleSave}> Guardar ruta </Button>
            </Header>
        </RouteWrapper>
    );

};

export default CreateRouteGeoJSON;