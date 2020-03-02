import React from 'react';
import '../App.css';
import '../Home.css'
import NavigationBar from '../fragments/NavigationBar';
import Footer from "../fragments/Footer";
import TimeLineRoute from "./TimeLineRoute";
import {FaUserCircle} from 'react-icons/fa'
import LoginButton from "@solid/react/src/components/LoginButton";
import AuthButton from "@solid/react/src/components/AuthButton";
import List from "@solid/react/src/components/List";

function TimeLine() {
    return (
        <div>
            <NavigationBar/>
            <FaUserCircle/>
            <h1 className={"ml-4 mt-4"}>Detalles del usuario</h1>
            <section className="grid pl-4 pr-4 demoContainer Nav">
                <List src="[https://ruben.verborgh.org/profile/#me].friends.firstName"/>
            </section>
            <Footer/>

        </div>
    );
}

export default TimeLine;
