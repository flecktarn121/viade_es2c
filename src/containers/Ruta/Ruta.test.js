import React from 'react';
import {cleanup, render} from 'react-testing-library';
import Ruta from "./Ruta";

const match = {
  params: {id: '0'}
};

describe.only('Ruta', () => {
  afterAll(cleanup);

  const { container, getByTestId } = render(
    <Ruta {...{match }}/>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
