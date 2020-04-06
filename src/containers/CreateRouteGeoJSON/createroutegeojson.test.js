import React from 'react';
import {cleanup, getByTestId, render} from 'react-testing-library';
import {HashRouter as Router} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import CreateRouteGeoJSON from "./CreateRouteGeoJSON";

library.add(fas);

const props = {
    webId: 'https://elmer.solid.community/'
};

describe.only('CreateRouteGeoJSON', () => {
  afterAll(cleanup);
  const { container } = render(
      <Router>
        <CreateRouteGeoJSON {...{ ...props }} />
      </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

    test('renders with styled components', () => {
        const route_wrapper = getByTestId(container, 'route-wrapper');
        const route_header = getByTestId(container, 'route-header');
        const input_title = getByTestId(container, 'input-title');
        const input_description = getByTestId(container, 'input-description');
        const input_file = getByTestId(container, 'input-file');
        const button_save = getByTestId(container, 'button-save');

        expect(route_wrapper).not.toBe(null);
        expect(route_header).not.toBe(null);
        expect(input_title).not.toBe(null);
        expect(input_description).not.toBe(null);
        expect(input_file).not.toBe(null);
        expect(button_save).not.toBe(null);

    });
});
