import React from 'react';
import {cleanup, render} from 'react-testing-library';
import Ruta from "./Ruta";
import Route from "../../utils/route/Route"

const match = {
  params: {id: '0'}
};

const markers = [
    {position :{lat: 43.354831, lng: -5.851303}},
    {position :{lat: 43.356440, lng: -5.854693}},
    {position :{lat: 43.361836, lng: -5.850547}}
];

const ruta = new Route("prueba", "prueba", markers, null, null, null);

describe.only('Ruta', () => {
  afterAll(cleanup);

  const { container, getByTestId } = render(
    <Ruta {...{match,ruta }}/>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });
});
