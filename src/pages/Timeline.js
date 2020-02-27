import React from 'react';
import '../App.css';
import '../Home.css'
import NavigationBar from '../fragments/NavigationBar';
import Footer from "../fragments/Footer";
import TimeLineRoute from "./TimeLineRoute";

function TimeLine() {
    return (
        <div>
            <NavigationBar/>
            <h1 className={"ml-4 mt-4"}>Cronología</h1>
            <section className="grid pl-4 pr-4 demoContainer Nav">
                <TimeLineRoute title="Hola1" date="18/08/2018" author={"Jaime"} description={"Ruta de montaña"}/>
                <TimeLineRoute title="Hola2" date="18/08/2018" author={"Jaime"} description={"Ruta de montaña"}/>
                <TimeLineRoute title="Hola3" date="18/08/2018" author={"Jaime"} description={"Ruta de montaña"}/>
                <TimeLineRoute title="Hola4" date="18/08/2018" author={"Jaime"} description={"Ruta de montaña"}/>
                <TimeLineRoute title="Hola5" date="18/08/2018" author={"Jaime"} description={"Ruta de montaña"}/>
            </section>
            <Footer/>

        </div>
    );
}

export default TimeLine;
