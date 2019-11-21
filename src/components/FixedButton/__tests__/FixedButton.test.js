import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import FixedButton from '../index';

configure({ adapter: new Adapter() });

describe('test', () => {
  it('render without crashing', () => {
    const test = shallow(<FixedButton />);
    expect(test).toMatchSnapshot();
  });
});
