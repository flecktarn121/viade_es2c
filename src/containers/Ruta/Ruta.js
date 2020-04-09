import React, {Component} from "react";
import Modal from 'react-awesome-modal'
import {Header} from "./Ruta.style";
import Map from "../../components/Map";
//import {useTranslation} from "react-i18next";

export default class Ruta extends Component {

    constructor(props) {
        super(props);

        this.route = props.route;

        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <section>
                <input type="button" data-testid="button-open" value={"Abrir"} onClick={() => this.openModal()}/>
                <Modal visible={this.state.visible} width="1000" height="650" effect="fadeInDown"
                       onClickAway={() => this.closeModal()}>
                    <div>
                        <Header>
                            <h1 className="text--white">{this.route.name}</h1>
                        </Header>
                        <Map zoom={15} markers={this.route.points}/>
                        <input type="button" data-testid="button-close" value={"Cerrar"} onClick={() => this.closeModal()}/>
                    </div>
                </Modal>
            </section>
        );
    }
}