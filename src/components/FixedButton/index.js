import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import EditButton from '../commons/fixedButton';

const FixedButton = () => (
  <EditButton>
    <FontAwesomeIcon icon={faSearch} style={{ color: '#28ABE2' }} size="1x" onClick="" />
  </EditButton>
);

// == Export
export default FixedButton;
