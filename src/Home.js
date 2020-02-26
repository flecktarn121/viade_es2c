import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import logo from './icono.png';
import user from './user.svg';
import {Nav, Navbar} from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Navbar expand="lg" bg="success" variant="dark">
                <Navbar.Brand href="#home">
                    <img src={logo} width="30" height="30"  className="d-inline-block align-center" alt="logo"/>
                    Viade
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Iniciar ruta</Nav.Link>
                        <Nav.Link href="#link">Ver rutas</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand href="#home">
                    <img src={user} width="30" height="30"  className="d-inline-block align-top" alt="logo"/>
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Home;
