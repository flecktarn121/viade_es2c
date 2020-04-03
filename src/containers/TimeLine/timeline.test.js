import React from 'react';
import {cleanup, render} from 'react-testing-library';
import {HashRouter as Router} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import TimeLine from "./Timeline";

library.add(fas);

const props = {
    webId: 'https://elmer.solid.community/'
};

describe.only('Timeline', () => {
  afterAll(cleanup);
  const { container, getByTestId } = render(
      <Router>
        <TimeLine {...{ ...props }}/>
      </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
