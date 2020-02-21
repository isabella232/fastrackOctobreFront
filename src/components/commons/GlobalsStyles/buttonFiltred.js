import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaDownAlt, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';
import { phoneQuery, tabletQuery } from '../../../services/media-queries';

const ButtonASC = styled.div`
  position: absolute;
  width: 16px;
  height: 14px;
  top: 2.5rem;
  right: 40px;
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

const ButtonFiltred = ({ supActive }) => {
  const [active] = useState(supActive);

  return (
    <>
      <ButtonASC>
        <Icon icon={faSortAlphaDown} size="1x" color={active} />
      </ButtonASC>
    </>
  );
};


export default ButtonFiltred;
