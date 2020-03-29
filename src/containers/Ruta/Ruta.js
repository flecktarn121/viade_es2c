//import React, {Component} from 'react';
import React from 'react';
import {Header, RouteContainer, RouteWrapper} from "./Ruta.style";
import Map from "../../components/Map";
import routes from "../../constants/globals";

const Ruta = ({match}) => (
    <RouteWrapper>
        <RouteContainer>
            <Header>
                <h1 className="text--white">{routes[match.params.id].name}: </h1>
                <h2 className="text--white">{routes[match.params.id].description}</h2>
            </Header>
            <Map zoom={15} markers={loadMarkers(match.params.id)}/>
        </RouteContainer>
    </RouteWrapper>
);

export default Ruta;

function loadMarkers(id){
    console.log(routes[id].points);
    return routes[id].points;
}