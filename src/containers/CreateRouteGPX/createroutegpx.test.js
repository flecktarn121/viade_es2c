import React from 'react';
import {cleanup, getByTestId, render, fireEvent} from 'react-testing-library';
import {HashRouter as Router} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import CreateRouteGPX from "./CreateRouteGPX";

library.add(fas);

const props = {
    webId: 'https://elmer.solid.community/'
};

describe.only('CreateRouteGPX', () => {
  afterAll(cleanup);
  const { container } = render(
      <Router>
        <CreateRouteGPX {...{ ...props }} />
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
        const file = new File(["<gpx creator=\"GPS Visualizer https://www.gpsvisualizer.com/\" version=\"1.0\">\n" +
        "  <trk>\n" +
        "    <name>Barrett Spur 1</name>\n" +
        "    <extensions>\n" +
        "      <line xmlns=\"http://www.topografix.com/GPX/gpx_style/0/2\">\n" +
        "        <color>9900ff</color>\n" +
        "      </line>\n" +
        "    </extensions>\n" +
        "    <trkseg>\n" +
        "      <trkpt lat=\"45.4431641\" lon=\"-121.7295456\"></trkpt>\n" +
        "      <trkpt lat=\"45.4428615\" lon=\"-121.7290800\"></trkpt>\n" +
        "    </trkseg>\n" +
        "  </trk>\n" +
        "</gpx>"], "track.gpx");

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
