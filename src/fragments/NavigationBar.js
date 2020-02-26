import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import logo from '../img/icono.png';
import {Nav, Navbar} from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return(
            <Navbar fixed="top" expand="lg" bg="success" variant="dark">
                <Navbar.Brand href="#home">
                    <img src={logo} width="30" height="30"  className="d-inline-block align-center" alt="logo"/>
                    Viade
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Crear ruta</Nav.Link>
                        <Nav.Link href="#link">Usuario</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
