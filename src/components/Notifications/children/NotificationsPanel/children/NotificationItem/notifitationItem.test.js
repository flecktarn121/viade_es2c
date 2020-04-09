import React from 'react';
import {cleanup, render} from 'react-testing-library';
import NotificationItem from "./notification-item.component";

afterAll(cleanup);

describe.only('Map', () => {
    const {container} = render(
        <NotificationItem />
    );

    it('renders without crashing', () => {
        expect(container).toBeTruthy();
    });

});
