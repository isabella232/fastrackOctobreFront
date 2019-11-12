import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import CardPartner from './cardPartner';

const Delay = styled(CardPartner)`
  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);
`;

const Delayed = ({ wait, children }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, wait);
  });

  return hidden ? '' : <Delay>{children}</Delay>;
};

Delayed.propTypes = {
  wait: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Delayed;
