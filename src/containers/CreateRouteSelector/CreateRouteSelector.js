/* eslint-disable constructor-super */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */

import React from 'react';
import {SelectorCard, SelectorOption, SelectorWrapper} from "./RouteSelector.style";
import {withRouter} from 'react-router-dom';
import {useTranslation} from 'react-i18next';


type Props = {webId: String};

function goTo(path) {
    window.location.href=path;
}

const CreateRouteSelector = ({ webId }: Props) => {
    const { t } = useTranslation();

    return (
        <SelectorWrapper data-testid="selector-wrapper">
            <SelectorCard className="card">
                <SelectorOption data-testid="selector-option-parsers">
                    <h3>{t('createRoute.archive')}</h3>
                    <button data-testid="goTo-gpx" onClick={() => goTo('#/createroutegpx')}>Gpx</button>
                    <button data-testid="goTo-geojson" onClick={() => goTo('#/createroutegeojson')}>GeoJSON</button>
                </SelectorOption>
                <SelectorOption data-testid="selector-option-map">
                    <h3>{t('createRoute.map')}</h3>
                    <button data-testid="goTo-map" onClick={() => goTo('#/createroute')}>{t('createRoute.here')}</button>
                </SelectorOption>
            </SelectorCard>
        </SelectorWrapper>
    );

};

export default withRouter (CreateRouteSelector);