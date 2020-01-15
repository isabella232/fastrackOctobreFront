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
} from '../LoginStyles/LoginStyles';

expect.addSnapshotSerializer(createSerializer(emotion));
configure({ adapter: new Adapter() });

describe('LoginStyles', () => {
  it('MainLoginContainer should renders with correct styles', () => {
    const tree = renderer.create(<MainLoginContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('LoginContainer should renders with correct styles', () => {
    const tree = renderer.create(<LoginContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('LogoContainer should renders with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };
    const tree = renderer.create(<LogoContainer theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('LogoLV should renders with correct styles', () => {
    const tree = renderer.create(<LogoLV />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('PrezContrainer should renders with correct styles', () => {
    const mock = {
      colors: {
        white: '#fff',
      },
    };
    const tree = renderer.create(<PrezContrainer theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('AppPrez should renders with correct styles', () => {
    const tree = renderer.create(<AppPrez />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('AppTitle should renders with correct styles', () => {
    const tree = renderer.create(<AppTitle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('LoginForm should renders with correct styles', () => {
    const tree = renderer.create(<LoginForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('FieldContainer should renders with correct styles', () => {
    const tree = renderer.create(<FieldContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Input should renders with correct styles', () => {
    const mock = {
      colors: {
        primary: '#111',
      },
    };
    const tree = renderer.create(<Input theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('DescInput should renders with correct styles', () => {
    const mock = {
      colors: {
        black: '#fff',
      },
    };
    const tree = renderer.create(<DescInput theme={mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Icon should renders with correct styles', () => {
    const mock = {
      colors: {
        black: '#fff',
      },
    };
    const wrapper = shallow(<Icon theme={mock} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
