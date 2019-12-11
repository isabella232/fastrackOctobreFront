import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button from '../commons/button';
import keyGenerator from '../../Helper/KeyGenerator';

const SubButton = styled(Button)`
   background: ${(props) => props.theme.colors.subCat};
`;
const SubSkills = ({ subCategories, click }) => (
  <>
    {subCategories.map((subCategory) => (
      <SubButton key={keyGenerator(subCategory.name)} onClick={click}>{subCategory.name}</SubButton>
    ))}
  </>
);

SubSkills.propTypes = {
  subCategories: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};

export default SubSkills;
