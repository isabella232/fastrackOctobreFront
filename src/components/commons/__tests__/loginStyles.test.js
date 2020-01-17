import React from 'react';
import renderer from 'react-test-renderer';
import { createSerializer } from 'jest-emotion';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import * as emotion from 'emotion';

import {
  MainLoginContainer,
  LoginContainer,
  LogoContainer,
  LogoLV,
  PrezContrainer,
  AppPrez,
  AppTitle,
  LoginForm,
  FieldContainer,
  Input,
  DescInput,
  Icon,
  Button,
} from '../LoginStyles/LoginStyles';

expect.addSnapshotSerializer(createSerializer(emotion));
configure({ adapter: new Adapter() });

describe('LoginStyles', () => {
  it('Button should renders with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
        white: '#FFF',
      },
    };
    const tree = shallow(<Button theme={mock} />);
    expect(tree).toMatchSnapshot();
  });
  it('MainLoginContainer should renders with correct styles', () => {
    const tree = shallow(<MainLoginContainer />);
    expect(tree).toMatchSnapshot();
  });

  it('LoginContainer should renders with correct styles', () => {
    const tree = shallow(<LoginContainer />);
    expect(tree).toMatchSnapshot();
  });
  it('LogoContainer should renders with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };
    const tree = shallow(<LogoContainer theme={mock} />);
    expect(tree).toMatchSnapshot();
  });
  it('LogoLV should renders with correct styles', () => {
    const tree = shallow(<LogoLV />);
    expect(tree).toMatchSnapshot();
  });
  it('PrezContrainer should renders with correct styles', () => {
    const mock = {
      colors: {
        white: '#fff',
      },
    };
    const tree = shallow(<PrezContrainer theme={mock} />);
    expect(tree).toMatchSnapshot();
  });
  it('AppPrez should renders with correct styles', () => {
    const tree = shallow(<AppPrez />);
    expect(tree).toMatchSnapshot();
  });
  it('AppTitle should renders with correct styles', () => {
    const tree = shallow(<AppTitle />);
    expect(tree).toMatchSnapshot();
  });
  it('LoginForm should renders with correct styles', () => {
    const tree = shallow(<LoginForm />);
    expect(tree).toMatchSnapshot();
  });
  it('FieldContainer should renders with correct styles', () => {
    const tree = shallow(<FieldContainer />);
    expect(tree).toMatchSnapshot();
  });
  it('Input should renders with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };
    const tree = shallow(<Input theme={mock} />);
    expect(tree).toMatchSnapshot();
  });
  it('DescInput should renders with correct styles', () => {
    const mock = {
      colors: {
        black: '#fff',
      },
    };
    const tree = shallow(<DescInput theme={mock} />);
    expect(tree).toMatchSnapshot();
  });
  it('Icon should renders with correct styles', () => {
    const mock = {
      colors: {
        black: '#fff',
      },
    };
    const wrapper = shallow(<Icon theme={mock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
