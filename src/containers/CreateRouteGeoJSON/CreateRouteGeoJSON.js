/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React, {useState} from 'react';
import {Button, Header, Input, Label, RouteWrapper} from "./RouteGeoJSON.style";
import RouteToRdfParser from "../../utils/parser/RouteToRdfParser"
import Route from "../../utils/route/Route"
import {errorToaster, successToaster} from '@utils';
import {useTranslation} from "react-i18next";

type Props = {webId: String, test: boolean};

let markers = [];

let geojsontest = '{"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {}, "geometry": {"type": "LineString", "coordinates": [[28.67431640625, 51.74743863117572], [28.037109375, 50.33844888725473], [30.684814453125004, 50.00067775723633], [30.223388671874996, 51.303145259199056], [29.68505859375, 49.1888842152458], [26.400146484375, 51.31688050404585]]}}]}'
let geojson = '';


const CreateRouteGeoJSON = ({ webId, test }: Props) => {
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
                    markers.push({position:{lat:coordinates[i][0], lng: coordinates[i][1]}});
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
            parsergeojson(test? geojsontest:geojson);
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
        if(file.current.files.length > 0){
            var reader = new FileReader();
            reader.readAsText(file.current.files[0]);
            reader.onload = loaded;
        }
    }

    return (
        <RouteWrapper data-testid="route-wrapper">
            <Header data-testid="route-header">
                <h1 className={"text--white"}>{t('createRoute.newRoute')}</h1>
                <Label>{t('createRoute.title')}</Label>
                <Input type="text" size="20" placeholder={t('createRoute.newRoute')} onChange={handleTitleChange} data-testid="input-title" />
                <Label>{t('createRoute.description')}</Label>
                <Input type="text" size="100" placeholder={t('createRoute.description')} onChange={handleDescriptionChange} data-testid="input-description"/>
                <Label>{t('createRoute.uploadGeoJson')}</Label>
                <Input type="file" ref={file} onChange={handleUpload} data-testid="input-file"/>
                <br/>
                <Button onClick={handleSave} data-testid="button-save"> {t('createRoute.saveRoute')} </Button>
            </Header>
        </RouteWrapper>
    );

};

export default CreateRouteGeoJSON;