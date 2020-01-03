import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion'
import ChronoLine, { Ellipse, Line } from '../chronoline';


expect.addSnapshotSerializer(createSerializer(emotion));
configure({ adapter: new Adapter() });

describe('ChronoLine', () => {
  it('should renders Line with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };
    const tree = renderer.create(<Line theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders Ellipse with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };
    const tree = renderer.create(<Ellipse theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders ChronoLine with correct styles', () => {

    const theme2 = {
      colors: {
        primary: '#111',
      },
    };

    // const shallowWithTheme = (tree, theme) => {
    //   const context = shallow(<ThemeProvider theme={theme} />)
    //     .instance()
    //     .getChildContext();
    //   return shallow(tree, { context });
    // };

    // const tree = shallowWhithTheme(<ChronoLine />, theme2).toJSON();
    const wrapper = shallow(<ChronoLine theme={theme2} />)
    expect(wrapper).toMatchSnapshot();
  });
});
