/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React from 'react';
import {SelectorCard, SelectorOption, SelectorWrapper} from "./RouteSelector.style";
import {withRouter} from 'react-router-dom';

type Props = {webId: String};

function createroute() {
    window.location.href=`#/createroute`;
}
function createroutegpx() {
    window.location.href=`#/createroutegpx`;
}



const CreateRouteSelector = ({ webId }: Props) => {
    // const { t } = useTranslation();

    return (
        <SelectorWrapper>
            <SelectorCard className="card">
                <SelectorOption>
                    <h3>A partir de un archivo gpx</h3>
                    <button onClick={createroutegpx}> Aqui </button>
                    <button onClick={createroutegpx}> Aqui </button>
                </SelectorOption>
                <SelectorOption>
                    <h3>Crea tu propia ruta en el mapa</h3>
                    <button onClick={createroute}> Aqui </button>
                </SelectorOption>
            </SelectorCard>
        </SelectorWrapper>
    );

};

export default withRouter (CreateRouteSelector);