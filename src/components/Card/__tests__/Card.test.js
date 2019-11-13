import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Card from '../index';

configure({ adapter: new Adapter() });

describe('Card', () => {
  it('should render without crashing', () => {
    const render = shallow(<Card
        
      />);
    expect(render).toMatchSnapshot();
  });
});
