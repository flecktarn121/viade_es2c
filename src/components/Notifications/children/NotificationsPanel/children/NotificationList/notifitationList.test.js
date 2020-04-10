import React from 'react';
import {cleanup, render} from 'react-testing-library';
import NotificationList from "./notification-list.component";

afterAll(cleanup);

describe.only('Map', () => {
    const {container} = render(
        <NotificationList />
    );

    it('renders without crashing', () => {
        expect(container).toBeTruthy();
    });

});
