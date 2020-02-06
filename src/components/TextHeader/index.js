import React from 'react';
import PropTypes from 'prop-types';
import TextHeader from '../commons/TextHeader';

const Title = ({ title, subtitle }) => (
  <TextHeader title={title} subtitle={subtitle} />
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Title;
