import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import { H3, P, SpanBold } from '../text';

expect.addSnapshotSerializer(serializer);

describe('Text', () => {
  it('renders with correct styles', () => {
    const tree = renderer.create(
      <SpanBold>
        <H3 />
        <P />
      </SpanBold>,
    )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
