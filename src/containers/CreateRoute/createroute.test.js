import React from 'react';
import {cleanup, fireEvent, getByTestId, render} from 'react-testing-library';
import {HashRouter as Router} from 'react-router-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import CreateRoute from "./CreateRoute";

library.add(fas);

const props = {
    webId: 'https://elmer.solid.community/'
};

describe.only('CreateRoute', () => {
  afterAll(cleanup);
  const { container } = render(
      <Router>
        <CreateRoute {...{ ...props }} />
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
        const button_save = getByTestId(container, 'button-save');
        const input_img = getByTestId(container, 'input-img');
        const input_video = getByTestId(container, 'input-video');

        expect(route_wrapper).not.toBe(null);
        expect(route_header).not.toBe(null);
        expect(input_title).not.toBe(null);
        expect(input_description).not.toBe(null);
        expect(button_save).not.toBe(null);
        expect(input_img).not.toBe(null);
        expect(input_video).not.toBe(null);

    });

    test('test inputs', () => {
        const input_title = getByTestId(container, 'input-title');
        const input_description = getByTestId(container, 'input-description');
        const input_file = getByTestId(container, 'input-file');
        const button_save = getByTestId(container, 'button-save');

        fireEvent.change(input_title, {target: {value: "prueba"}});
        fireEvent.change(input_description, {target: {value: "prueba"}});

        fireEvent.change(input_file);
        expect(input_title.value).toEqual("prueba");
        expect(input_description.value).toEqual("prueba");

        const input_img = getByTestId(container, 'input-img');
        const input_video = getByTestId(container, 'input-video');

        const img = new File(["(⌐□_□)"], "img.png", {
            type: "image/png"
        });

        const video = new File(["(⌐□_□)"], "video.mp4", {
            type: "video/mp4"
        });
        Object.defineProperty(input_img, "files", {
            value: [img]
        });
        fireEvent.change(input_img);

        Object.defineProperty(input_video, "files", {
            value: [video]
        });
        fireEvent.change(input_video);

        fireEvent.click(button_save);
    });

});
