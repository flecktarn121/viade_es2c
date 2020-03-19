/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React from 'react';
import {Button, Header, RouteWrapper, Input, Label} from "./Route.style";
import {CreateMap} from "../../components";
import RouteToRdfParser from "../../utils/parser/RouteToRdfParser"
import Route from "../../utils/route/Route"
import {Uploader} from '@inrupt/solid-react-components';

type Props = {webId: String};

class CreateRoute extends React.Component {

    constructor({webId}: Props) {
        super();
        this.webID = webId.replace("profile/card#me", "");
        console.log(this.webID);
        this.handleSave = this.handleSave.bind(this);
        this.title = React.createRef();
    }

    state = {markers: {}};

    callbackFunction = (childData) => {
        this.setState({markers: childData})
    };

    handleSave(event) {
        if (this.title.current.value.length === 0) {
            alert("La ruta tiene que tener un titulo.")
        } else if (this.state.markers === 0) {
            alert("No ha marcado ningún punto en el mapa.")
        } else {
            let route = new Route(this.title.current.value, "Ruta", this.state.markers, this.webID, null, null, null);
            let parser = new RouteToRdfParser(route, this.webID);
            parser.parse();
            alert("Se ha guardado correctamente");
        }
        event.preventDefault();
    }

    render() {
        return (
            <RouteWrapper>
                <Header>
                    <h1 className={"text--white"}>Nueva Ruta</h1>
                    <Label>Titulo</Label>
                    <Input type="text" size="20" placeholder="Nueva ruta" ref={this.title}/>
                    <Label>Descripcion</Label>
                    <Input type="text" size="100" placeholder="Descripcion" ref={this.title}/>
                    <Label>Sube una foto</Label>
                    <Input type="file" accept="image/*, video/*"/>
                    <br/>
                    <Button onClick={this.handleSave}> Guardar ruta </Button>
                </Header>
                <CreateMap parentCallback={this.callbackFunction}/>
            </RouteWrapper>
        );
    }
}

export default CreateRoute;