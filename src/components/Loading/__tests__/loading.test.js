import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import Loading from '../index';

expect.addSnapshotSerializer(serializer);

describe('Loading', () => {
  it('renders with correct styles', () => {
    const tree = renderer.create(<Loading />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
