import React from 'react';
import '../App.css';
import '../Home.css'
import NavigationBar from '../fragments/NavigationBar';
import Footer from "../fragments/Footer";
import LoggedOut from "@solid/react/src/components/LoggedOut";
import LoggedIn from "@solid/react/src/components/LoggedIn";
import AuthButton from "../loaders/AuthButton"

function TimeLine() {
    return (
        <div>
            <NavigationBar/>
            <h1 className={"ml-4 mt-4"}>Detalles del usuario</h1>
            <section className="grid pl-4 pr-4 demoContainer Nav">
                <AuthButton popup="./popup.html" login="Login here!" logout="Log me out"/>
                <LoggedOut>
                    <p>You are not logged in, and this is a members-only area!</p>
                </LoggedOut>
                <LoggedIn>
                    <p>You are logged in and can see the special content.</p>
                </LoggedIn>
            </section>
            <Footer/>

        </div>
    );
}

export default TimeLine;
