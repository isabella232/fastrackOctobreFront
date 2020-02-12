import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { phoneQuery, tabletQuery } from '../../../services/media-queries';

const ButtonASC = styled.div`
  position: absolute;
  width: 16px;
  height: 14px;
  top: 2.5rem;
  left: 96%;
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
  left: 98%;
  ${tabletQuery`
  top: 6em;
  left: 84%
    `};
  ${phoneQuery`
  top: 128px;
  left: 88%

    `};
`;

const Icon1 = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  width: 40px;

`;

const Icon2 = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  width: 40px;
`;

const FiltredButton = ({
  // eslint-disable-next-line react/prop-types
  click, icon1, icon2,
}) => {
  const [color, setColor] = useState('#fff');

  const handleChangeColor = () => {
    if (color === '#fff') {
      setColor('#39AAE1');
    }
    else if (color === '#39AAE1') {
      setColor('#fff');
    }
  };


  return (
    <>
      <Link to="">
        <ButtonASC onClick={click}>
          <Icon1 icon={icon1} color={color} size="1x" onClick={handleChangeColor} />
        </ButtonASC>
        <ButtonDESC onClick={click}>
          <Icon2 icon={icon2} color={color} size="1x" onClick={handleChangeColor} />
        </ButtonDESC>
      </Link>
    </>
  );
};


export default FiltredButton;
