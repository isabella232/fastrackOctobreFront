import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Nav from '../index';

configure({ adapter: new Adapter() });

describe('Nav', () => {
  it('render without crashing', () => {
    const test = shallow(<Nav />);
    expect(test).toMatchSnapshot();
  });
});
