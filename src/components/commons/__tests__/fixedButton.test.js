import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import EditButton from '../fixedButton';

expect.addSnapshotSerializer(serializer);

describe('fixedButtonCSS', () => {
  it('renders with correct styles', () => {
    const tree = renderer.create(<EditButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
