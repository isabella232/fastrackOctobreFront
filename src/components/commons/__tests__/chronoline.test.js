import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import ChronoLine, { Ellipse, Line } from '../chronoline';


expect.addSnapshotSerializer(serializer);

describe('ChronoLine', () => {
  it('should renders Line with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };
    const tree = renderer.create(<Line theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders Ellipse with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };
    const tree = renderer.create(<Ellipse theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip('should renders ChronoLine with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };

    const tree = renderer.create(<ChronoLine theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
