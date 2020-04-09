import React from 'react';
import {cleanup, render} from 'react-testing-library';
import {Tabs} from './tabs.component';

afterAll(cleanup);

describe.only('Map', () => {
    const {container} = render(
        <Tabs />
    );

    it('renders without crashing', () => {
        expect(container).toBeTruthy();
    });

});
