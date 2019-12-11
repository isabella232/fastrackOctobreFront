import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const loadingsping = keyframes`
100% {
  transform: rotate(360deg);
}`;

const LoadingSpinner = styled.div`
width: 2.5em;
height: 2.5em;
pointer-events: none;
position: fixed;
left: calc(50% + 1.25em);
top: calc(50%);
border: 0.4em solid transparent;
border-color: #eee;
border-top-color: #3E67EC;
border-radius: 50%;
animation: ${loadingsping} 1s linear infinite;
`;

const Loading = () => (
  <LoadingSpinner />
);

export default Loading;
