import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button from '../commons/button';
import keyGenerator from '../../Helper/KeyGenerator';

const SubButton = styled(Button)`
   background: #FF408C;
`;
const SubSkills = (props) => (
  <>
    {props.subCategories.map((subCategory) => (
      <SubButton key={keyGenerator(subCategory.name)} onClick={(e) => props.click(e)}>{subCategory.name}</SubButton>
    ))}
  </>
);

SubSkills.propTypes = {
  subCategories: PropTypes.array.isRequired,
};

export default SubSkills;
