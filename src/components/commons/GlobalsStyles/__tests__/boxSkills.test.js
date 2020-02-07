import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import BoxSkills from '../boxSkills';

expect.addSnapshotSerializer(serializer);

describe('boxSkills', () => {
  it('should renders with correct styles', () => {
    const tree = renderer.create(<BoxSkills />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
