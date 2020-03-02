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
            <div>
                <Map zoom={15}>

                </Map>
            </div>
            <Footer/>
        </div>
    );
}

export default Route;