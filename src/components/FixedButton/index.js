import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import EditButton from '../commons/fixedButton';

const FixedButton = () => (
  <EditButton>
    <Link><FontAwesomeIcon icon={faSearch} style={{ color: '#28ABE2' }} size="1x" /></Link>
  </EditButton>
);

// == Export
export default FixedButton;
