import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import CardPartner from '../cardPartner';

expect.addSnapshotSerializer(serializer);

describe('cardPartnerCSS', () => {
  it('renders with correct styles', () => {

    const tree = renderer.create(<CardPartner />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
