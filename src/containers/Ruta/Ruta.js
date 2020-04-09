import React, {Component} from "react";
import Modal from 'react-awesome-modal'
import {Header} from "./Ruta.style";
import Map from "../../components/Map";
import Route from "../../utils/route/Route";
import {withTranslation} from 'react-i18next';

type Props = {
    route: Route,
    t: Function
};

class Ruta extends Component {

    constructor({route}: Props) {
        super();

        this.route = route;

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
        const { t } = this.props;
        return (
            <section>
                <input type="button" data-testid="button-open" value={t('route.open')} onClick={() => this.openModal()}/>
                <Modal visible={this.state.visible} width="70%" height="85%" effect="fadeInDown"
                       onClickAway={() => this.closeModal()}>
                    <div>
                        <Header>
                            <h1 className="text--white">{this.route.name}</h1>
                        </Header>
                        <Map zoom={15} markers={this.route.points}/>
                        <input type="button" data-testid="button-close" value={t('route.close')} onClick={() => this.closeModal()}/>
                    </div>
                </Modal>
            </section>
        );
    }
}

export {Ruta};
export default withTranslation()(Ruta);