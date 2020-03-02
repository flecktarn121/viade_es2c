import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import '@inrupt/solid-style-guide';
import logo from '../img/icono.png';
import log from '../img/logo-mapa.svg';
import {Nav, Navbar} from 'react-bootstrap';
import {FaBookOpen, FaRoute, FaUserCircle, FaMapMarkerAlt} from 'react-icons/fa'
import {MdLanguage, MdNotifications} from 'react-icons/md'
import {GiSpain, GiBrazil, GiHamburgerMenu} from 'react-icons/gi'


class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar expand="lg" bg="success" variant="dark" sticky={"top"}>
                <Navbar.Brand href="#home">
                    <img src={logo} width="30" height="30" className="d-inline-block align-center" alt="logo"/>
                    Viade
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Crear ruta</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/src/index.html">Usuario</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            // <header role="header" className="header sticky-top header__desktop">
            //     <section className="header-wrap Nav">
            //         <div className="logo-block">
            //             <a href="#" className="text-light"><span className="icon"><FaMapMarkerAlt/> Viade </span></a>
            //         </div>
            //         <nav role="nav" className="nav nav__primary">
            //             <ul>
            //                 <li><a href="#" className="text-light"><span className="icon"><FaBookOpen/> Inicio </span></a>
            //                 </li>
            //                 <li><a href="#" className="text-light"><span className="icon"><FaRoute/> Crear ruta </span></a>
            //                 </li>
            //
            //             </ul>
            //         </nav>
            //
            //         <nav role="nav" className="nav nav__toolbar">
            //             <ul>
            //                 <li className="has-children language-selector">
            //                     <button><span className="icon text-white"><MdLanguage/></span>
            //                     </button>
            //                     <ul className="sub-nav-dropdown language-selector">
            //                         <li>
            //                             <button className="language-selector__item "><span className="icon flag"><GiBrazil/></span> English
            //                             </button>
            //                         </li>
            //                         <li>
            //                             <button className="language-selector__item"><span className="icon flag"><GiSpain/></span> Spanish
            //                             </button>
            //                         </li>
            //                     </ul>
            //                 </li>
            //                 <li>
            //                     <button><span className="icon notification text-light"><MdNotifications/><span
            //                         className="badge">3</span></span></button>
            //                 </li>
            //                 <li className="has-children">
            //                     <button><span className="icon text-light"><FaUserCircle/></span>
            //                     </button>
            //                     <ul className="sub-nav-dropdown">
            //                         <li>
            //                             <button>Profile</button>
            //                         </li>
            //                         <li>
            //                             <button>Log Out</button>
            //                         </li>
            //                     </ul>
            //                 </li>
            //             </ul>
            //         </nav>
            //
            //         <div className="mobile-navigation__toggle bg-success">
            //             <button><span className="icon"><GiHamburgerMenu/></span></button>
            //         </div>
            //     </section>
            //     <div className="header-spacer"></div>
            // </header>

        );
    }
}

export default NavigationBar;