import React from 'react';
import {cleanup, render} from 'react-testing-library';
import Marker from "./Marker";

afterAll(cleanup);

describe.only('Marker', () => {
    const {container, rerender} = render(
        <Marker />
    );

    it('renders without crashing', () => {
        expect(container).toBeTruthy();
    });
});
