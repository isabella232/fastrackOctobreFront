import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import Img from '../logoTechno';

expect.addSnapshotSerializer(serializer);

describe('Logo', () => {
  it('renders with correct styles', () => {

    const tree = renderer.create(<Img />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
