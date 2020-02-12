import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { getSearchBar } from '../../../services/client';
import { clearStoreList, addList } from '../../../store/actions';

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


const SearchBar = ({ top, left }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    await dispatch(clearStoreList([]));
    getSearchBar(value).then((res) => dispatch(addList(res)));
  };

  return (
    <>
      <Bar top={top} left={left} onKeyPress={(e) => e.key === 'Enter' && handleSubmit()} onChange={(e) => setValue(e.target.value)} placeholder="Rechercher un partner" />
    </>
  );
};

SearchBar.propTypes = {
  top: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
};

export default SearchBar;
