import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { phoneQuery, tabletQuery } from '../../../services/media-queries';

const ButtonASC = styled.div`
  position: absolute;
  width: 16px;
  height: 14px;
  top: 2.5rem;
  right: 40px;
  cursor: pointer;
  ${tabletQuery`
  top: 6em;
  left: 80%
    `};
  ${phoneQuery`
  top: 128px;
  left: 82%

    `};
`;

const ButtonDESC = styled.div`
  position: absolute;
  width: 16px;
  height: 14px;
  top: 2.5rem;
  right: 70px;
  cursor: pointer;
  ${tabletQuery`
  top: 6em;
  left: 84%
    `};
  ${phoneQuery`
  top: 128px;
  left: 88%

    `};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  width: 40px;

`;

const FiltredButton = ({ descClick, ascClick, icon1, icon2 }) => {

  return (
    <>
      <ButtonASC onClick={descClick}>
        <Icon icon={icon1} size="1x" color="#fff" onClick={descClick} />
      </ButtonASC>
      <ButtonDESC onClick={ascClick}>
        <Icon icon={icon2} size="1x" color="#fff" />
      </ButtonDESC>
    </>
  );
};


export default FiltredButton;
