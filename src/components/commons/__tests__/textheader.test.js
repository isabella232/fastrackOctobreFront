import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import TextHeader from '../TextHeader';

configure({ adapter: new Adapter() });

describe('test', () => {
  it('render without crashing', () => {
    const test = shallow(<TextHeader title="test" subtitle="test"/>);
    expect(test).toMatchSnapshot();
  });
});
