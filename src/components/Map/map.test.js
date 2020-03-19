import React from 'react';
import {cleanup, render} from 'react-testing-library';
import Map from "./Map";

const markers = [
    {lat: 43.354831, lng: -5.851303},
    {lat: 43.356440, lng: -5.854693},
    {lat: 43.361836, lng: -5.850547}
];

const anotherMarkers = [
    {lat: 43.354831, lng: -5.851303},
    {lat: 43.356440, lng: -5.854693},
    {lat: 43.361836, lng: -5.850547}
];

afterAll(cleanup);

describe.only('Map', () => {
    const {container, rerender} = render(
        <Map zoom={15} markers={markers}/>
    );

    it('renders without crashing', () => {
        expect(container).toBeTruthy();
    });

    it('renders with other markers', () => {
        rerender(
            <Map zoom={15} markers={anotherMarkers}/>
        );
        expect(container).toBeTruthy();
    });
});
