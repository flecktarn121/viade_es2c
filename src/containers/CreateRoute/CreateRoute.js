/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React from 'react';
import {Button, Header, RouteWrapper} from "./Route.style";
import {CreateMap} from "../../components";
import {Input} from "../TextEditor/text-editor.style";
import RouteToRdfParser from "../../utils/parser/RouteToRdfParser"
import Route from "../../utils/route/Route"

type Props = { webId: String };

class CreateRoute extends React.Component {

    constructor({ webId }: Props) {
        super();
        this.webID = webId.slice(0,30)
        console.log(this.webID);
        this.handleSave = this.handleSave.bind(this);
        this.title = React.createRef();
    }

    state = {markers: {}};

    callbackFunction = (childData) => {
        this.setState({markers: childData})
    };

    handleSave(event){
        if(this.title.current.value.length == 0){
            alert("La ruta tiene que tener un titulo.")
        }else if(this.state.markers == 0){
            alert("No ha marcado ningún punto en el mapa.")
        }else{
            let route = new Route(this.title.current.value,"Ruta",this.state.markers,this.webID,null,  null,  null);
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
                    <Input type="text" size="20" placeholder="Nueva ruta" ref={this.title}/>
                    <Button onClick={this.handleSave}> Guardar ruta </Button>
                </Header>

                <CreateMap parentCallback = {this.callbackFunction}/>
            </RouteWrapper>
        );
    }
}

export default CreateRoute;