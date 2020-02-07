import React from 'react';
import PropTypes from 'prop-types';
import keyGenerator from '../../Helper/KeyGenerator';
import SubButton from '../commons/GlobalsStyles/subButton';


const SubSkills = ({ subCategories, click }) => (
  <>
    {subCategories.map((subCategory) => (
      <SubButton key={keyGenerator(subCategory.name)} onClick={(e) => click(e)}>{subCategory.name}</SubButton>
    ))}
  </>
);

SubSkills.propTypes = {
  subCategories: PropTypes.array.isRequired,
  click: PropTypes.func.isRequired,
};

export default SubSkills;
