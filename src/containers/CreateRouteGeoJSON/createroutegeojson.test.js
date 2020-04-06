import React from 'react';
import {cleanup, render} from 'react-testing-library';
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
  const { container, getByTestId } = render(
      <Router>
        <CreateRouteGeoJSON {...{ ...props }} />
      </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

    test('renders with styled components', () => {
        expect(getByTestId('route-wrapper')).toBeTruthy();
        expect(getByTestId('route-header')).toBeTruthy();
        expect(getByTestId('input-title')).toBeTruthy();
        expect(getByTestId('input-description')).toBeTruthy();
        expect(getByTestId('input-file')).toBeTruthy();
        expect(getByTestId('button-save')).toBeTruthy();

    });
});
