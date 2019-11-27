import React from 'react';
import styled from '@emotion/styled';

import { HorizontalFlex } from '../../pages/styles';

// <Line />
const Line = styled.div`
margin: 2rem 0;
display: flex; 
justify-content: center;
width: 100%;
height: 5px;
background: #28ABE2;
`;

// <Ellipse />
const Ellipse = styled.div`

width: 1rem;
height: 1rem;
background: #28ABE2;
border-radius: 25px; 
top: 50%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`;

const ChronoLine = () => (

  <HorizontalFlex width="100%">
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
