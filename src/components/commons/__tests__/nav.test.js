import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import Nav from '../nav';

expect.addSnapshotSerializer(serializer);

describe('Nav', () => {
  it('renders with correct style', () => {

    const tree = renderer.create(<Nav />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
