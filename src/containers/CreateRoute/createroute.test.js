import React from 'react';
import {cleanup, render} from 'react-testing-library';
import {BrowserRouter as Router} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import CreateRoute from "./CreateRoute";

library.add(fas);

const props = {
    webId: 'https://elmer.solid.community/'
};

describe.only('CreateRoute', () => {
  afterAll(cleanup);
  const { container, getByTestId } = render(
      <Router>
        <CreateRoute {...{ ...props }} />
      </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
