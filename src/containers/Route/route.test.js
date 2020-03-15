import React from 'react';
import {cleanup, render} from 'react-testing-library';
import Route from "./Route";

describe.only('Route', () => {
  afterAll(cleanup);

  const { container, getByTestId } = render(
    <Route />
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
