// == Import : npm
import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faChartLine, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

// Import local

// CSS

const Navbar = styled.div({
  width: '80px', height: '100vh', background: '#29AAE2', display: 'flex', flexDirection: 'column', padding: '10rem 0', position: 'fixed',
});

const IconContainer = styled.div`width: 80px; height: 100vh; display: flex; justify-content: space-around; align-items: center; flex-direction: column;`;

const Img = styled.img`width: 80px; position: absolute; top: 0;`;

// == Composant
const Nav = () => (
  <Navbar>
    <Img src="src/styles/img/Logo-LV.png" alt="" />
    <IconContainer>
      <a href="#"> <FontAwesomeIcon icon={faUser} style={{ color: '#FFF', width: '80px' }} size="2x" /></a>
      <a href="#"> <FontAwesomeIcon icon={faGraduationCap} style={{ color: '#FFF', width: '80px' }} size="2x" /></a>
      <a href="#"> <FontAwesomeIcon icon={faChartLine} style={{ color: '#FFF', width: '80px' }} size="2x" /></a>
    </IconContainer>
    <a href="#"> <FontAwesomeIcon icon={faDoorOpen} style={{ color: '#FFF', width: '80px', position: 'absolute', top: 'calc(100% - 48px)' }} size="1x" /></a>
  </Navbar>
);

// == Export
export default Nav;
