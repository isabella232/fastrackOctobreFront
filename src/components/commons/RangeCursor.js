import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { P } from './text';
import { Rect } from '../../pages/styles';

const RangeTxt = styled(P)`
  position : absolute; 
  color: white; 
  left: 88%;
  margin-top: 0.5rem;

`;

export const SlideContainer = styled.div`
  width: 16rem;
  position: absolute;
  left: calc(-0.6rem + -2px);
  top: calc(2rem - 2px);
`;

export const Slider = styled.input`
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
    border-color: transparent transparent #007bff transparent;
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
    border-color: transparent transparent #007bff transparent;
    cursor: pointer;
  }

  &:hover {
    opacity: 1; 
    border: none; 
  }
`;

const RangeCursor = () => {
  const [value, setValue] = useState(75);
  const handleChange = (e) => setValue(e.target.value);

  return (
    <>
      <Rect background="#C7ECEE" />
      <Rect background="#7ED6DF" />
      <Rect background="#22A6B3" />
      <Rect background="#3C6382" />
      <RangeTxt> {value} </RangeTxt>
      <SlideContainer>
        <Slider type="range" min="0" max="100" value={value} onChange={handleChange} />
      </SlideContainer>
    </>
  );

}

export default RangeCursor;