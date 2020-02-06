import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { P } from './text';
import HorizontalFlex from './horizontalFlex';

const FavStar = () => {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState();
  const [counter, setCounter] = useState();

  const switchActive = () => {
    if (counter !== 3) {
      setCounter(counter + 1);
      setIsActive(!isActive);
      setColor('pink');
    }
    else {
      setCounter(0);
    }
  };
  return (
    <HorizontalFlex alignItems="center">
      <FontAwesomeIcon icon={faStar} color={color} size="2x" onClick={switchActive} />
      <P margin="0 2rem">{counter} / 3</P>
    </HorizontalFlex>
  );
};

export default FavStar;
