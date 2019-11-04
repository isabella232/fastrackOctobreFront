import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Header = styled.div`
  width: calc(100% - 80px);
  margin-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
`;

const Title = styled.h2`
  color: #FFF;
  font-size: 2rem;
  font-weight: bold;
`;

const Subtitle = styled.h3`
  color: #FFF;
  font-size: 1rem;
  font-weight: 300;
`;

const TextHeader = (props) => (
  <Header>
    <Title>{props.title}</Title>
    <Subtitle>{props.subtitle}</Subtitle>
  </Header>
);

TextHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TextHeader;
