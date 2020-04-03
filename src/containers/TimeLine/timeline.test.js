import React from 'react';
import {cleanup, queryByAttribute, render} from 'react-testing-library';
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

  const getById = queryByAttribute.bind(null, 'id');
  const { container } = render(
      <Router>
        <TimeLine {...{ ...props }}/>
      </Router>
  );

  test('renders without crashing', () => {
    expect(container).toBeTruthy();
  });

    test('timeline render properly', () => {

        const timeline_wrapper = getById(container, 'timeline-wrapper');
        const timeline_container = getById(container, 'timeline-container');
        const timeline_rankInput = getById(container, 'timeline-header');

        expect(timeline_wrapper).not.toBe(null);
        expect(timeline_container).not.toBe(null);
        expect(timeline_rankInput).not.toBe(null);
    });

});
