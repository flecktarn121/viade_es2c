/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React, {useState} from 'react';
import {Button, Header, Input, Label, RouteWrapper} from "./Route.style";
import {CreateMap} from "../../components";
import RouteToRdfParser from "../../utils/parser/RouteToRdfParser"
import Route from "../../utils/route/Route"
import {errorToaster, successToaster} from '@utils';
import {useTranslation} from "react-i18next";
import Map from "../../components/Map";

type Props = {webId: String};

const CreateRouteGPX = ({ webId }: Props) => {
    const { t } = useTranslation();
    const webID = webId.replace("profile/card#me", "");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [markers, setMarkers] = useState({});
    let file = React.createRef();

    function callbackFunction(childData){
        setMarkers(childData);
    }

    function handleSave(event) {
        if (title.length === 0) {
            errorToaster(t('notifications.title'),t('notifications.error'));
        }else if(description.length === 0){
            errorToaster(t('notifications.description'),t('notifications.error'));
        } else {
            let route = new Route(title, description, markers, webID, null, null, null);
            let parser = new RouteToRdfParser(route, webID);
            parser.parse();
            successToaster(t('notifications.save'),t('notifications.success'));
            let path = `#/timeline`;
            window.location.href=path
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

    function handleUpload(event) {
        event.preventDefault();
        let reader = new FileReader();
        reader.onload = function(event) {
            var xmlParser = new DOMParser();
            var xmlDoc = xmlParser.parseFromString(event.target.result.toString(), "text/xml");
            var wpts = xmlDoc.getElementsByTagName("wpt")
            for (var i = 0; i < wpts.length ;i++) {
                console.log(wpts[i].getAttribute('lat') +" - " + wpts[i].getAttribute('lon'))
            }
        };
        reader.readAsText(file.current.files[0]);
        console.log(reader.result)
    }

    return (
        <RouteWrapper>
            <Header>
                <h1 className={"text--white"}>Nueva Ruta</h1>
                <Label>Titulo</Label>
                <Input type="text" size="20" placeholder="Nueva ruta" onChange={handleTitleChange} />
                <Label>Descripcion</Label>
                <Input type="text" size="100" placeholder="Descripcion" onChange={handleDescriptionChange}/>
                <Label>Sube tu archivo GPX</Label>
                <Input type="file" ref={file} onChange={handleUpload}/>
                <br/>
                <Button onClick={handleSave}> Guardar ruta </Button>
            </Header>
            <Map zoom={10} markers={markers}/>
            <CreateMap parentCallback={callbackFunction}/>
        </RouteWrapper>
    );

};

export default CreateRouteGPX;