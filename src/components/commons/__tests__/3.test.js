import React from 'react';
import renderer from 'react-test-renderer';
import serializer from 'jest-emotion';
import * as emotion from 'emotion'
import { createSerializer } from 'jest-emotion'
import { BrowserRouter as Router } from 'react-router-dom';
import FiltredButton from '../filterButton';
import { SkillsSlideContainer, Rect, HorizontalFlex, VerticalFlex, BoxHead, BoxGoals, BoxSkills, Infos } from '../otherStyles';


expect.addSnapshotSerializer(createSerializer(emotion));

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
