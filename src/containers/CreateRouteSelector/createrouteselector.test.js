import React from 'react';
import {cleanup, fireEvent, getByTestId, render} from 'react-testing-library';
import {HashRouter as Router} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import CreateRouteSelector from "./CreateRouteSelector";

library.add(fas);

const props = {
    webId: 'https://elmer.solid.community/'
};

describe.only('CreateRouteSelector', () => {
    afterAll(cleanup);
    const {container} = render(
        <Router>
            <CreateRouteSelector {...{...props}} />
        </Router>
    );

    test('renders without crashing', () => {
        expect(container).toBeTruthy();
    });

    test('renders with styled components', () => {
        const selector_wrapper = getByTestId(container, 'selector-wrapper');
        const selector_option_parsers = getByTestId(container, 'selector-option-parsers');
        const gpx = getByTestId(container, 'goTo-gpx');
        const geojson = getByTestId(container, 'goTo-geojson');
        const selector_option_map = getByTestId(container, 'selector-option-map');
        const map = getByTestId(container, 'goTo-map');

        expect(selector_wrapper).not.toBe(null);
        expect(selector_option_parsers).not.toBe(null);
        expect(gpx).not.toBe(null);
        expect(geojson).not.toBe(null);
        expect(selector_option_map).not.toBe(null);
        expect(map).not.toBe(null);

        expect(document.querySelector('.card')).toBeTruthy();
    });

    test('go to gpx', () => {
        const gpxButton = getByTestId(container, "goTo-gpx");
        fireEvent.click(gpxButton);
        expect(window.location.href).toBe('#/createroutegpx');
    });


});
