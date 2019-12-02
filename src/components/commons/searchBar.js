import React from 'react';
import styled from '@emotion/styled';

const Bar = styled.input`
  position: absolute;
  width: 200px;
  height: 10px;
  border-radius: 45px;
  border: none;
  font-size: 0.8rem;
  color: #2E3540;
  font-weight: 300;
  padding: 1rem 1rem;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;


const SearchBar = (props) => (
  <>
    <Bar top={props.top} left={props.left} onChange={props.change} placeholder="Rechercher un partner" />
  </>
);

export default SearchBar;
