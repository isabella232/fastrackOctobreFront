import React from 'react';
import HorizontalFlex from './horizontalFlex';
import Line from './line';
import Ellipse from './ellipse';


const ChronoLine = () => (

  <HorizontalFlex width="100%" position="relative">

    <HorizontalFlex width="calc(100%/3)">
      <Line>
        <Ellipse />
      </Line>
    </HorizontalFlex>

    <HorizontalFlex width="calc(100%/3)">
      <Line>
        <Ellipse />
      </Line>
    </HorizontalFlex>

    <HorizontalFlex width="calc(100%/3)">
      <Line>
        <Ellipse />
      </Line>
    </HorizontalFlex>
  </HorizontalFlex>
);

export default ChronoLine;
