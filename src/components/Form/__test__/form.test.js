import React from 'react';
import { createSerializer } from 'jest-emotion';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import * as emotion from 'emotion';

import {
  Button,
  Input,
  InputFile,
  Select,
  Label,
} from '../../commons/Form/FormStyle';

expect.addSnapshotSerializer(createSerializer(emotion));

configure({ adapter: new Adapter() });

describe('formTest', () => {
  it('Button should renders with correct styles', () => {
    const tree = shallow(<Button />);
    expect(tree).toMatchSnapshot();
  });

  it('Input should renders with correct styles', () => {
    const tree = shallow(<Input />);
    expect(tree).toMatchSnapshot();
  });

  it('InputFile should renders with correct styles', () => {
    const tree = shallow(<InputFile />);
    expect(tree).toMatchSnapshot();
  });

  it('Select renders with correct styles', () => {
    const tree = shallow(<Select />);
    expect(tree).toMatchSnapshot();
  });

  it('Label renders with correct styles', () => {
    const tree = shallow(<Label />);
    expect(tree).toMatchSnapshot();
  });
});
