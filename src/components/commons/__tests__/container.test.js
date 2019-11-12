import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import Container from '../container';

expect.addSnapshotSerializer(serializer);

describe('cardPartnerCSS', () => {
  it('renders with correct styles', () => {

    const tree = renderer.create(<Container />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
