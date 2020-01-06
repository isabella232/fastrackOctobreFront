import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import BoxGoals from '../boxGoals';

expect.addSnapshotSerializer(serializer);

describe('boxGoals', () => {
  it('should renders with correct styles', () => {
    const tree = renderer.create(<BoxGoals />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
