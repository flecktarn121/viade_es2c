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

type Props = {webId: String};

const CreateRoute = ({ webId }: Props) => {
    const { t } = useTranslation();
    const webID = webId.replace("profile/card#me", "");
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [photo, setPhoto] = useState('');
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

    function handlePhotoChange(event) {
        event.preventDefault();
    }

    return (
        <RouteWrapper>
            <Header>
                <h1 className={"text--white"}>Nueva Ruta</h1>
                <Label>Titulo</Label>
                <Input type="text" size="20" placeholder="Nueva ruta" onChange={handleTitleChange} />
                <Label>Descripcion</Label>
                <Input type="text" size="100" placeholder="Descripcion" onChange={handleDescriptionChange}/>
                <Label>Sube una foto</Label>
                <Input type="file" ref={file} onChange={handlePhotoChange}/>
                <br/>
                <Button onClick={handleSave}> Guardar ruta </Button>
            </Header>
            <CreateMap parentCallback={callbackFunction}/>
        </RouteWrapper>
    );

};

// class CreateRouteSelector extends React.Component {
//
//     constructor({webId}: Props) {
//         super();
//         this.webID = webId.replace("profile/card#me", "");
//         console.log(this.webID);
//         this.handleSave = this.handleSave.bind(this);
//         this.title = React.createRef();
//     }
//
//     state = {markers: {}};
//
//     callbackFunction = (childData) => {
//         this.setState({markers: childData})
//     };
//
//     handleSave(event) {
//         if (this.title.current.value.length === 0) {
//             errorToaster(t('Ta mal'));
//         } else if (this.state.markers === 0) {
//             errorToaster(t('Ta mal'));
//         } else {
//             let route = new Route(this.title.current.value, "Ruta", this.state.markers, this.webID, null, null, null);
//             let parser = new RouteToRdfParser(route, this.webID);
//             parser.parse();
//             successToaster(t('Ta bien'));
//         }
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <RouteWrapper>
//                 <Header>
//                     <h1 className={"text--white"}>Nueva Ruta</h1>
//                     <Label>Titulo</Label>
//                     <Input type="text" size="20" placeholder="Nueva ruta" ref={this.title}/>
//                     <Label>Descripcion</Label>
//                     <Input type="text" size="100" placeholder="Descripcion" ref={this.title}/>
//                     <Label>Sube una foto</Label>
//                     <Input type="file" accept="image/*, video/*"/>
//                     <br/>
//                     <Button onClick={this.handleSave}> Guardar ruta </Button>
//                 </Header>
//                 <CreateMap parentCallback={this.callbackFunction}/>
//             </RouteWrapper>
//         );
//     }
// }

export default CreateRoute;