import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import Button from '../button';

expect.addSnapshotSerializer(serializer);

describe('button', () => {
  it('should renders with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
        white: '#fff',
      },
    };
    const tree = renderer.create(<Button theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
