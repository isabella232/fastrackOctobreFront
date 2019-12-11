import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import SubSkills from '../SubSkills';
import Skills from '../Skills';
import Button from '../commons/button';
import { setTechno } from '../../store/actions';

const SubContainer = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [currentTechno, setCurrentTechno] = useState('Front');
  const dispatch = useDispatch();

  useEffect(() => {dispatch(setTechno(currentTechno))}, [currentTechno]);
  // useEffect(() => setIsActive(!isActive), [currentTechno]);

  const handleChangeTechno = (e) => {
    e.preventDefault();
    props.setTechno(e);
  };

  return (
    <>
      <Button onClick={(e) => setCurrentTechno(e.target.innerText)}>{props.category.name}</Button>
      {isActive && <SubSkills subCategories={props.category.subCategories} click={(e) => dispatch(setTechno(e.target.innerText))} />}
    </>
  );
};

SubContainer.propTypes = {
  category: PropTypes.object.isRequired,
};

export default SubContainer;
