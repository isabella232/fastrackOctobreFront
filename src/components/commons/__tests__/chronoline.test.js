import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';
import ChronoLine from '../chronoLine';
import Line from '../line';
import Ellipse from '../ellipse';


expect.addSnapshotSerializer(createSerializer(emotion));
configure({ adapter: new Adapter() });

describe('ChronoLine', () => {
  it('should renders Line with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };

    const wrapper = shallow(<ChronoLine theme={mock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
