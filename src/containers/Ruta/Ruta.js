import React, {Component} from 'react';
import {Header, RouteContainer, RouteWrapper} from "./Ruta.style";
import Map from "../../components/Map";
import routes from "../../constants/globals";

const Ruta = ({match}) => (
    <RouteWrapper>
        <RouteContainer>
            <Header>
                <h1 className="text--white">Ruta</h1>
            </Header>
            <Map zoom={15} markers={loadMarkers(match.params.id)}/>
        </RouteContainer>
    </RouteWrapper>
);

export default Ruta;

function loadMarkers(id){
    console.log(routes[id]);
    return routes[id].points;
}