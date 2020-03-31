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
import MediaLoader from "../../utils/InOut/MediaLoader";
import InputFiles from 'react-input-files';
import ReactDOM from 'react-dom'

type Props = { webId: String };

const CreateRoute = ({webId}: Props) => {
    const {t} = useTranslation();
    const webID = webId.replace("profile/card#me", "");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photo, setPhoto] = useState(null);
    const [video, setVideo] = useState(null);
    const [markers, setMarkers] = useState({});
    const [photoURL, setPhotoURL] = useState("");
    const [videoURL, setVideoURL] = useState("");

    function callbackFunction(childData) {
        setMarkers(childData);
    }

    function handleSave(event) {
        if (title.length === 0) {
            errorToaster(t('notifications.title'), t('notifications.error'));
        } else if (description.length === 0) {
            errorToaster(t('notifications.description'), t('notifications.error'));
        } else {
            let loader = new MediaLoader();
            loader.saveImage(photoURL, photo);
            loader.saveVideo(videoURL, video);
            let route = new Route(title, description, markers, webID, null, null, null);
            let parser = new RouteToRdfParser(route, webID);
            parser.parse();
            successToaster(t('notifications.save'), t('notifications.success'));
            setTimeout(function () {
                window.location.href = '#/timeline'
            }, 1000)
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

    function handlePhotoChange(files) {
        if (files.length > 0) {
            setPhoto(files[0]);
            setPhotoURL(webID + "viade/" + files[0].name);
        }
    }

    function handleVideoChange(files) {
        if (files.length > 0) {
            setVideo(files[0]);
            setVideoURL(webID + "viade/" + files[0].name);
        }
    }

    return (
        <RouteWrapper>
            <Header>
                <h1 className={"text--white"}>Nueva Ruta</h1>
                <Label>Titulo</Label>
                <Input type="text" size="20" placeholder="Nueva ruta" onChange={handleTitleChange}/>
                <Label>Descripcion</Label>
                <Input type="text" size="100" placeholder="Descripcion" onChange={handleDescriptionChange}/>
                <Label>Multimedia</Label>
                <InputFiles onChange={handlePhotoChange} accept={".png"}>
                    <button>Añadir foto</button>
                </InputFiles>
                <br/>
                <InputFiles onChange={handleVideoChange} accept={".mp4"}>
                    <button>Añadir video</button>
                </InputFiles>
                <br/>
                <Button onClick={handleSave}> Guardar ruta </Button>
            </Header>
            <CreateMap parentCallback={callbackFunction}/>
        </RouteWrapper>
    );

};

export default CreateRoute;