import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import axios from 'axios';

import CardPartner from './cardPartner';

const Delay = styled(CardPartner)`
  transition: all 0.7s cubic-bezier(0.86, 0, 0.07, 1);
  opacity: 0;

  &:hover {
    transform: scale(1.04);
    transition-duration: 500ms;
    transition-property: transform;
  }

  ${(props) => props.animate && `
    opacity: 1;
  `}
`;

const Delayed = ({ wait, children }) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, wait);
  });

  return <Delay animate={hidden}>{children}</Delay>;
};

Delayed.propTypes = {
  wait: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Delayed;
