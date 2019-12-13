import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import SubSkills from '../SubSkills';
import Button from '../commons/button';
import { setTechno } from '../../store/actions';

const SubContainer = (props) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const toggleIsActive = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
    dispatch(setTechno(e.target.innerText));
  };

  const dispatchTechno = (e) => {
    e.preventDefault();
    dispatch(setTechno(e.target.innerText));
  };

  return (
    <>
      <Button onClick={(e) => toggleIsActive(e)}>{props.category.name}</Button>
      {isActive && <SubSkills subCategories={props.category.subCategories} click={dispatchTechno} />}
    </>
  );
};

SubContainer.propTypes = {
  category: PropTypes.object.isRequired,
};

export default SubContainer;
