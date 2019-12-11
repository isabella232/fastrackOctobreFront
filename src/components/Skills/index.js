import React from 'react';
import PropTypes from 'prop-types';
import Button from '../commons/button';

const Skills = ({ click, name }) => (
  <Button onClick={click}> {name} </Button>
);

Skills.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};


export default Skills;
