import React from 'react';
import '../App.css';
import '../Home.css'
import NavigationBar from '../fragments/NavigationBar';
import Footer from "../fragments/Footer";
import Map from "../components/Map";

function Route() {
    return (
        <div>
            <NavigationBar/>
            <div>
                <Map/>
            </div>
            <Footer/>
        </div>
    );
}

export default Route;