import React from 'react';
import '../App.css';
import '../Home.css'
import NavigationBar from '../fragments/NavigationBar';
import Footer from "../fragments/Footer";
import Map from "../components/Map";

const markers = [
    {lat: 43.354831, lng: -5.851303},
    {lat: 43.356440, lng: -5.854693},
    {lat: 43.361836, lng: -5.850547}
];

function Route() {
    return (
        <div>
            <NavigationBar/>
            <div className={"ml-4 mt-4"}>
                <h1>Ruta</h1>
            </div>

            <section className="grid pl-4 pr-4 demoContainer Nav">
            <div className="mt-3 mb-3">
                <Map zoom={15} markers={markers}>
                </Map>
            </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Route;