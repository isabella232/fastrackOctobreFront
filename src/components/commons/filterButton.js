import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = styled.div`
  position: absolute;
  width: 16px;
  height: 14px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => props.color};
  width: 40px;
`;

const FiltredButton = (props) => {
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
        <Button top={props.top} left={props.left} onClick={props.click}>
          <Icon icon={props.icon} color={color} size="1x" onClick={handleChangeColor} />
        </Button>
      </Link>
    </>
  );
};

export default FiltredButton;
