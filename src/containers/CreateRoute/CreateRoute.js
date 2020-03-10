import React from 'react';
import {Button, Header, NewRouteContainer, RouteContainer, RouteWrapper} from "./Route.style";
import {CreateMap} from "../../components";
import {Input} from "../TextEditor/text-editor.style";

const markers = [
    {lat: 43.354831, lng: -5.851303},
    {lat: 43.356440, lng: -5.854693},
    {lat: 43.361836, lng: -5.850547}
];

let mapa = new CreateMap();

class CreateRoute extends React.Component {
    state = {markers: {}};

    callbackFunction = (childData) => {
        this.setState({markers: childData})
        console.log(this.state.markers)
    };

    render() {
        return (
            <RouteWrapper>
                <Header>
                    <Input type="text" size="20" placeholder="Nueva ruta"/>
                    <Button> Guardar ruta </Button>
                </Header>

                <CreateMap parentCallback = {this.callbackFunction}/>
            </RouteWrapper>
        );
    }
}

export default CreateRoute;