import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import BoxHead from '../boxHead';

expect.addSnapshotSerializer(serializer);

describe('boxHead', () => {
  it('should renders with correct styles', () => {
    const tree = renderer.create(<BoxHead />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
