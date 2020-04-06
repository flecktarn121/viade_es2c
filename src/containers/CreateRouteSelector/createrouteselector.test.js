import React from 'react';
import {cleanup, render} from 'react-testing-library';
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
  const { container, getByTestId } = render(
      <Router>
        <CreateRouteSelector {...{ ...props }} />
      </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

    test('renders with styled components', () => {
        expect(getByTestId('selector-wrapper')).toBeTruthy();
        expect(getByTestId('selector-option-parsers')).toBeTruthy();
        expect(getByTestId('goTo-gpx')).toBeTruthy();
        expect(getByTestId('goTo-geojson')).toBeTruthy();
        expect(getByTestId('selector-option-map')).toBeTruthy();
        expect(getByTestId('goTo-map')).toBeTruthy();
        expect(document.querySelector('.card')).toBeTruthy();
    });
});
