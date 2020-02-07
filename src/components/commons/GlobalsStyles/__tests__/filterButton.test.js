import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import { BrowserRouter as Router } from 'react-router-dom';
import FiltredButton from '../filterButton';

expect.addSnapshotSerializer(serializer);

describe('filterButton', () => {
  it('should renders with correct styles', () => {
    const mock = {
      props: {
        link: '/',
        top: '10px',
        left: '3px',
        color: '#fff',
        icon: 'faUser',
      },
    };

    const tree = renderer.create(
      <Router>
        <FiltredButton {...mock} />
      </Router>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
