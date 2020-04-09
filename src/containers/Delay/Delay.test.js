import React from 'react';
import {cleanup, render} from 'react-testing-library';
import SmallRow from "./index";

describe.only('Delay', () => {
    afterAll(cleanup);

    const { container, getByTestId } = render(
        <SmallRow/>
    );

    test('renders without crashing', () => {
        expect(container).toBeTruthy();
    });
});
