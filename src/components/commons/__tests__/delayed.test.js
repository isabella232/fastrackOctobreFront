import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import Delayed from '../delayed';

expect.addSnapshotSerializer(serializer);

describe('Delayed', () => {
  it('renders with correct styles', () => {
    const mock = {
        props: {
            hidden : 'hidden'
          },
          colors : {
              partnerBg : '#FFF'
          }
    }

    const tree = renderer.create(<Delayed {...mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
