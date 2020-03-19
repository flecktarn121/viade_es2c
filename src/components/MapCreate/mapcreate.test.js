import React from 'react';
import {cleanup, render} from 'react-testing-library';
import {HashRouter as Router} from 'react-router-dom';
import {CreateMap} from "./Map";

afterAll(cleanup);

describe.only('Map create', () => {
  const { container } = render(
    <Router>
      <CreateMap />
    </Router>
  );

  it('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
