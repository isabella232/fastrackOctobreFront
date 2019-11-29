import React from 'react';
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
  color: #fff;
  width: 40px;
`;

const FiltredButton = (props) => (
  <>
    <Link to={props.link}>
      <Button top={props.top} left={props.left}>
        <Icon icon={props.icon} size="1x" />
      </Button>
    </Link>
  </>
);

export default FiltredButton;
