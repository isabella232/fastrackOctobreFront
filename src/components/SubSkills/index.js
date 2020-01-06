import React from 'react';
import PropTypes from 'prop-types';
import keyGenerator from '../../Helper/KeyGenerator';
import SubButton from '../commons/subButton';


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
