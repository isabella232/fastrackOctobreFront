import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import { BrowserRouter as Router } from 'react-router-dom';
import FiltredButton from '../filterButton';
import { SkillsSlideContainer, Rect, HorizontalFlex, VerticalFlex, BoxHead, BoxGoals, BoxSkills, Infos } from '../otherStyles';


expect.addSnapshotSerializer(serializer);

describe('SkillsSlideContainer', () => {
  it('should renders with correct styles', () => {

    const tree = renderer.create(
      <SkillsSlideContainer />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Rect', () => {
  it('should renders with correct styles', () => {
    const mock = {
      colors: {
        black: '#111',
      },
    };

    const tree = renderer.create(
      <Rect theme={mock} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('HorizontalFlex', () => {
  it('should renders with correct styles', () => {

    const tree = renderer.create(
      <HorizontalFlex />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('VerticalFlex', () => {
  it('should renders with correct styles', () => {

    const tree = renderer.create(
      <VerticalFlex />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('BoxHead', () => {
  it('should renders with correct styles', () => {

    const tree = renderer.create(
      <BoxHead />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('BoxGoals', () => {
  it('should renders with correct styles', () => {

    const tree = renderer.create(
      <BoxGoals />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('BoxSkills', () => {
  it('should renders with correct styles', () => {

    const tree = renderer.create(
      <BoxSkills />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('Infos', () => {
  it('should renders with correct styles', () => {

    const tree = renderer.create(
      <Rect />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
