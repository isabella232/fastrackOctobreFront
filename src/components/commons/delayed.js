import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Delay from './delay';


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
