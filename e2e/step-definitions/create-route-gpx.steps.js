import { defineFeature, loadFeature } from 'jest-cucumber';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import CreateRouteGPX from "../../src/containers/CreateRouteGPX";
import {HashRouter as Router} from "react-router-dom";
import {render} from "react-testing-library";

const feature = loadFeature('../features/create-route-gpx.feature');

defineFeature(feature, test => {
    test('The route must have a title', ({ given, when, then }) => {
        let testInstance: TestRenderer.ReactTestInstance;
        let  webId =  'https://elmer.solid.community/';
        const { container, getByTestId } = render(
            <Router>
                <CreateRouteGPX webId />
            </Router>
        );

        given('Route creation from gpx page', () => {
            const testRenderer = TestRenderer.create(<Router><CreateRouteGPX {...{ ...webId }} /></Router>);
            testInstance = testRenderer.root;
        });

        when('I dont fill the title in the form and press submit', () => {
            expect(page).toClick('button', { text: 'Guardar ruta' })
        });

        then('A toaster error should be shown in the screen', () => {
            // let notification = TestClass.buildNotification(options, 'success', 'This is the title', 'This is the body');
            // let notificationContentDiv = notification.childNodes[0];
            //
            // expect(notification).toBeInstanceOf(HTMLDivElement);
            // expect(notificationContentDiv).toBeInstanceOf(HTMLDivElement);
            //
            // let childNodes = notificationContentDiv.childNodes;
            // expect(childNodes.length).toBe(3);
            // expect(childNodes.item(0).textContent).toBe('This is the title');
            // expect(childNodes.item(1).textContent).toBe('This is the body');
        });
    });
});