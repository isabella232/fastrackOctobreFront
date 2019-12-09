import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SubSkills from '../SubSkills';
import Skills from '../Skills';

const SubContainer = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    isActive ? setIsActive(false) : setIsActive(true);
    props.setTechno(e);
  };

  return (
    <>
      <Skills name={props.category.name} click={handleClick} />
      {isActive && <SubSkills subCategories={props.category.subCategories} click={handleClick} />}
    </>
  );
};

SubContainer.propTypes = {
  category: PropTypes.object.isRequired,
};

export default SubContainer;
