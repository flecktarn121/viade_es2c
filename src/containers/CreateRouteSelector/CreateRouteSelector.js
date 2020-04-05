/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React from 'react';
import {SelectorCard, SelectorOption, SelectorWrapper} from "./RouteSelector.style";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';


type Props = {webId: String};

function createroute() {
    window.location.href=`#/createroute`;
}
function createroutegpx() {
    window.location.href=`#/createroutegpx`;
}

function createroutegeojson() {
    window.location.href=`#/createroutegeojson`;
}


const CreateRouteSelector = ({ webId }: Props) => {
    const { t } = useTranslation();

    return (
        <SelectorWrapper>
            <SelectorCard className="card">
                <SelectorOption>
                    <h3>{t('createRoute.archive')}</h3>
                    <button onClick={createroutegpx}> Gpx </button>
                    <button onClick={createroutegeojson}> GeoJSON </button>
                </SelectorOption>
                <SelectorOption>
                    <h3>{t('createRoute.map')}</h3>
                    <button onClick={createroute}> {t('createRoute.here')} </button>
                </SelectorOption>
            </SelectorCard>
        </SelectorWrapper>
    );

};

export default withRouter (CreateRouteSelector);