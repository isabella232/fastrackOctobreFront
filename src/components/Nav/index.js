// == Import : npm
import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faChartLine, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

// Import local

import Navbar from '../commons/nav';

// CSS

const IconContainer = styled.div`width: 80px;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;`;

const Img = styled.img`width: 80px;
position: absolute;
top: 0;`;

// == Composant

const Nav = () => (
  <Navbar>
    <Img src="src/styles/img/Logo-LV.png" alt="" />
    <IconContainer>
      <Link><FontAwesomeIcon icon={faUser} style={{ color: '#FFF', width: '80px' }} size="2x" /></Link>
      <Link><FontAwesomeIcon icon={faGraduationCap} style={{ color: '#FFF', width: '80px' }} size="2x" /></Link>
      <Link><FontAwesomeIcon icon={faChartLine} style={{ color: '#FFF', width: '80px' }} size="2x" /></Link>
    </IconContainer>
    <Link><FontAwesomeIcon icon={faDoorOpen} style={{ color: '#FFF', width: '80px', position: 'absolute', top: 'calc(100% - 48px)' }} size="1x" /></Link>
  </Navbar>
);

// == Export

export default Nav;
