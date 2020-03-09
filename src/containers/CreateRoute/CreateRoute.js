import React from 'react';
import {Header, RouteContainer, RouteWrapper} from "./Route.style";
import {CreateMap} from "../../components";

const markers = [
    {lat: 43.354831, lng: -5.851303},
    {lat: 43.356440, lng: -5.854693},
    {lat: 43.361836, lng: -5.850547}
];

function CreateRoute() {
    return (
        <RouteWrapper>
            <RouteContainer>
                <Header>
                    <h1 className="text--white">Ruta</h1>
                </Header>
                <div style={{height: '70vh', width: '100%'}}>
                    <CreateMap/>
                </div>

            </RouteContainer>
        </RouteWrapper>
    );
}

export default CreateRoute;