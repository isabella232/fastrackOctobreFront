import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { skillsSender } from '../../services/client';

import { P } from './text';
import HorizontalFlex from './horizontalFlex';
import Rect from './rect';
import { setSkillValue, addValue } from '../../store/actions';

const RangeTxt = styled(P)`
  position : absolute; 
  color: ${(props) => props.theme.colors.accentExtraLight}; 
  left: 88%;
  margin-top: 0.5rem;
`;

const SlideContainer = styled.div`
  width: 16rem;
  position: absolute;
  height: 70px;
  left: calc(-0.6rem + -2px);
  top: 4px;
`;

const Slider = styled.input`
  width: 17.2rem;
  height: 70px;
  justify-self : center;
  background: none;
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

const RangeCursor = ({ res, level }) => {
  const dispatch = useDispatch();
  const [lvl, setLvl] = useState(level);
  const [isActive, setIsActive] = useState();
  const partner = useSelector(({ partnerReducer }) => partnerReducer.partnerDetails);

  useEffect(() => {
    level === 0 ? setIsActive(false) : setIsActive(true);
  }, []);
  
  const setValue = (level) => {
    dispatch(setSkillValue(
      { id: res.id, level },
    ));
  };

  const addSkillValue = (level) => {
    dispatch(addValue(
      { id: res.id, level },
    ));
  };

  const opacityHandler = (edit) => (
    edit > 1 ? 1 : 0.5
  );


  return (
    <HorizontalFlex position="relative">
      <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#C7ECEE" opacity={opacityHandler(level)} />
      <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#7ED6DF" opacity={opacityHandler(level)} />
      <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#22A6B3" opacity={opacityHandler(level)} />
      <Rect BorderTop="1.5" BorderRight="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#3C6382" opacity={opacityHandler(level)} />
      <RangeTxt> {lvl} </RangeTxt>
      <SlideContainer>
        <Slider type="range" min="0" max="100" value={lvl} onMouseUp={(e) => (isActive ? setValue(parseInt(e.target.value)) : addSkillValue(parseInt(e.target.value)))} onChange={(e) => setLvl(e.target.value)} />
      </SlideContainer>
    </HorizontalFlex>
  );
};

RangeCursor.propTypes = {
  res: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired,
};

export default RangeCursor;
