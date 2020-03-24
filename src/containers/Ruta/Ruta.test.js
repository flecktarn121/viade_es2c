import React from 'react';
import {cleanup, render} from 'react-testing-library';
import Ruta from "./Ruta";

describe.only('Ruta', () => {
  afterAll(cleanup);

  const { container, getByTestId } = render(
    <Ruta />
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
