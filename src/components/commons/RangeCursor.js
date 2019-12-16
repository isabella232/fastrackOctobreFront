import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import styled from '@emotion/styled';
import { P } from './text';
import { HorizontalFlex, Rect } from './otherStyles';
import Img from './logoTechno';
import { setSkillValue } from '../../store/actions';

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


const RangeCursor = ({ res, value }) => {
  const dispatch = useDispatch();
  const partner = useSelector(({ partnerReducer }) => partnerReducer.partnerDetails.skills);
  const [editValue, setEditValue] = useState(value);

  useEffect(() => {
    console.log("pouet");
    if (partner.filter(skill => res.id === skill.id).length === 0) {
      partner.push({
        id: res.id,
        level: 0,
      });
    }

    console.log(partner.map(skill => {
      if (skill.id === res.id) {
        skill.level = editValue;
      }
      return skill;
    }));
    dispatch(setSkillValue(partner.map(skill => {
      if (skill.id === res.id) {
        skill.level = editValue;
      }
      return skill;
    })));
  }, [setEditValue]);

  const opacityHandler = (edit) => (
    edit > 1 ? 1 : 0.5
  );


  return (
    <>
      {console.log("Hey coucou I'm ", res.id)}
      <HorizontalFlex marginTop="2rem" justifyContent="space-between" width="55%" minW="" maxW="" margin="2rem auto">
        <HorizontalFlex width="100%" justifyContent="flex-start">
          <Img height="2rem" width="2rem" margin="0 2rem 0 0" src={`./styles/img/${res.icon}.png`} alt="techno-Logo" />
          <P fontWeight="bold" padding=".5rem 2rem 0rem 0">{res.name}</P>
        </HorizontalFlex>
        <HorizontalFlex position="relative">
          <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#C7ECEE" opacity={opacityHandler(editValue)} />
          <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#7ED6DF" opacity={opacityHandler(editValue)} />
          <Rect BorderTop="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#22A6B3" opacity={opacityHandler(editValue)} />
          <Rect BorderTop="1.5" BorderRight="1.5" BorderBottom="1.5" BorderLeft="1.5" background="#3C6382" opacity={opacityHandler(editValue)} />
          <RangeTxt> {editValue} </RangeTxt>
          <SlideContainer>
            <Slider type="range" min="0" max="100" value={editValue} onChange={(e) => setEditValue(e.target.value.replace(/[^0-9.]/g, '').trim())} />
          </SlideContainer>
        </HorizontalFlex>
      </HorizontalFlex>
    </>
  );
};

RangeCursor.propTypes = {
  res: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
};

export default RangeCursor;
