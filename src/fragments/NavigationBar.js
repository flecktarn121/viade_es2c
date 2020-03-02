import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import '@inrupt/solid-style-guide';
import {Dropdown, Nav, Navbar} from 'react-bootstrap';
import {FaBookOpen, FaMapMarkerAlt, FaRoute} from 'react-icons/fa'
import LoggedIn from "../loaders/LoggedIn";
import LoggedOut from "../loaders/LoggedOut";
import Value from "../loaders/Value";
import LogoutButton from "../loaders/LogoutButton";


class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar expand="lg" bg="success" variant="dark" sticky={"top"}>
                <Navbar.Brand href="#home">
                    <FaMapMarkerAlt/> <span className="icon">Viade</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">
                            <span className="text-light"> <span className="icon"><FaBookOpen/></span> Inicio</span>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <span className="text-light"> <span className="icon"><FaRoute/></span> Crear ruta</span>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    <LoggedIn>
                                        <Value src="user.name"/>
                                    </LoggedIn>
                                    <LoggedOut>
                                        Usuario
                                    </LoggedOut>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Ver perfil</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"><LogoutButton/></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;