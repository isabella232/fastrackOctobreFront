import React from 'react';
import styled from '@emotion/styled';
import { HorizontalFlex } from './otherStyles';


// <Line />
const Line = styled.div`
margin: 2rem 0;
display: flex; 
justify-content: center;
width: 100%;
height: 5px;
background: ${(props) => props.theme.colors.primary};

`;

// <Ellipse />
const Ellipse = styled.div`
position: absolute;
width: 1rem;
height: 1rem;
background: ${(props) => props.theme.colors.primary};
border-radius: 25px; 
top: 50%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`;

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
