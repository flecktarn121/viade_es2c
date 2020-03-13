import React from 'react';
import {Button, Header, RouteWrapper} from "./Route.style";
import {CreateMap} from "../../components";
import {Input} from "../TextEditor/text-editor.style";

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