/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React from 'react';
import {Header, SelectorCard, SelectorContainer, SelectorOption, SelectorWrapper} from "./RouteSelector.style";
import {useTranslation} from "react-i18next";
import {Link, withRouter} from 'react-router-dom';

type Props = {webId: String};

function routeChange() {
    let path = `#/createroute`;
    window.location.href=path
}

const CreateRouteSelector = ({ webId }: Props) => {
    const { t } = useTranslation();

    return (
        <SelectorWrapper>
            <SelectorCard className="card">
                <SelectorOption>
                    <h3>A partir de un archivo gpx</h3>
                    <button> hola</button>
                </SelectorOption>
                <SelectorOption>
                    <h3>Crea tu propia ruta en el mapa</h3>
                    <button onClick={routeChange}> Aqui </button>
                </SelectorOption>
            </SelectorCard>
        </SelectorWrapper>
    );

};

export default withRouter (CreateRouteSelector);