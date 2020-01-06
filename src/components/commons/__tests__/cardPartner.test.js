import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';

import CardPartner from '../cardPartner';

expect.addSnapshotSerializer(serializer);

describe('cardPartnerCSS', () => {
  it('renders with correct styles', () => {
    const mock = {
      colors: { partnerBg: '#111' },
    };

    const tree = renderer.create(<CardPartner theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
