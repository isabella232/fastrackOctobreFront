import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { P } from './text';
import { HorizontalFlex, Rect } from './otherStyles';
import Img from './logoTechno';

const RangeTxt = styled(P)`
  position : absolute; 
  color: ${(props) => props.theme.colors.accentExtraLight}; 
  left: 88%;
  margin-top: 0.5rem;

`;

const SlideContainer = styled.div`
  width: 16rem;
  position: absolute;
  left: calc(-0.6rem + -2px);
  top: calc(2rem - 2px);
`;


const Slider = styled.input`
  width: 17.2rem;
  background: none;
  justify-self : center;
  outline: none;
  border: 0;
  appearance: none; 

  &::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    background: none;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 .60rem 1.2rem .60rem;
    border-color: transparent transparent ${(props) => props.theme.colors.primary} transparent;
    cursor: pointer; 
  }
  &::-moz-focus-outer {
    border: 0;
  }
  &::-moz-range-thumb {
    width: 0;
    height: 0;
    background: none;
    border-style: solid;
    border-width: 0 .60rem 1.2rem .60rem;
    border-color: transparent transparent ${(props) => props.theme.colors.primary} transparent;
    cursor: pointer;
  }

  &:hover {
    opacity: 1; 
    border: none; 
  }
`;

const getRandomInt = (max) => (
  Math.floor(Math.random() * Math.floor(max))
);

const RangeCursor = ({ res, value }) => {
  //const handleChange = (e) => setValue(e.target.value);

  return (
    <>
      <HorizontalFlex marginTop="2rem" justifyContent="space-between" width="55%" minW="" maxW="" margin="2rem auto">
        <HorizontalFlex width="100%" justifyContent="flex-start">
          <Img height="2rem" width="2rem" margin="0 2rem 0 0" src={`./styles/img/${res.icon}.png`} alt="techno-Logo" />
          <P fontWeight="bold" padding=".5rem 2rem 0rem 0">{res.name}</P>
        </HorizontalFlex>
        <HorizontalFlex position="relative">
          <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#C7ECEE" />
          <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#7ED6DF" />
          <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#22A6B3" />
          <Rect BorderTop="1.5" BorderRight="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#3C6382" />
          <RangeTxt> {value} </RangeTxt>
          <SlideContainer>
            <Slider type="range" min="0" max="100" value={value} />
          </SlideContainer>
        </HorizontalFlex>
      </HorizontalFlex>

    </>
  );
};

RangeCursor.propTypes = {
  res: PropTypes.object.isRequired,
};

export default RangeCursor;
