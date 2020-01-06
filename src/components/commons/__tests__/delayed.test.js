import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import emotion from 'emotion';
import { shallow, configure } from 'enzyme';
import { createSerializer } from 'jest-emotion';

import Delayed from '../delayed';

expect.addSnapshotSerializer(createSerializer(emotion));
configure({ adapter: new Adapter() });

describe('Delayed', () => {
  jest.useFakeTimers();
  it.skip('renders with correct styles', () => {
    const props = {
      hidden: 'false',
      wait: 250,
      colors: { partnerBg: '#111' },
    };
    const wrapper = shallow(<Delayed {...props} />);
    // const tree = renderer.create(<Delayed {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 250);
  });
});
