import React from 'react';
import '../App.css';
import '../Home.css'
import NavigationBar from '../fragments/NavigationBar';
import Footer from "../fragments/Footer";
import Map from "../components/Map";
import {Marker} from "google-map-react";

function Route() {
    return (
        <div>
            <NavigationBar/>
            <div className={"ml-4 mt-4"}>
                <h1>Crea tu ruta</h1>
                <p>Selecciona en el mapa los puntos por los que has pasado.</p>
            </div>

            <section className="grid pl-4 pr-4 demoContainer Nav">
            <div className="mt-3 mb-3">
                <Map zoom={15}>
                </Map>
            </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Route;