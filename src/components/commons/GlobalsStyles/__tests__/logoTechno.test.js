import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import Img from '../logoTechno';

expect.addSnapshotSerializer(serializer);

describe('Logo', () => {
  it('should renders with correct styles', () => {
    const props = {
      height: '10px',
      width: '10px',
      marginBottom: '3px',
      margin: '#fff',
    };

    const tree = renderer.create(<Img {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
