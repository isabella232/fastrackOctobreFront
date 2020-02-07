import React from 'react';
import PropTypes from 'prop-types';
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


const SearchBar = ({ top, left, change }) => (
  <>
    <Bar top={top} left={left} /* onChange={change} */ placeholder="Rechercher un partner" />
  </>
);

SearchBar.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
  /* change: PropTypes.func.isRequired, */
};

export default SearchBar;
