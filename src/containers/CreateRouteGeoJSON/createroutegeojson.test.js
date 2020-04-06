import React from 'react';
import {cleanup, fireEvent, getByTestId, render} from 'react-testing-library';
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

    test('test inputs', () => {
        const input_title = getByTestId(container, 'input-title');
        const input_description = getByTestId(container, 'input-description');
        const input_file = getByTestId(container, 'input-file');
        const button_save = getByTestId(container, 'button-save');
        const file = new File(['{"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[28.67431640625,51.74743863117572],[28.037109375,50.33844888725473]]}}]}'], "track.geojson");
        fireEvent.change(input_title, { target: { value: "prueba" } });
        fireEvent.change(input_description, { target: { value: "prueba" } });
        Object.defineProperty(input_file, "files", {
            value: [file]
        });
        fireEvent.change(input_file);
        expect(input_title.value).toEqual("prueba");
        expect(input_description.value).toEqual("prueba");

        fireEvent.click(button_save);
    });
});
