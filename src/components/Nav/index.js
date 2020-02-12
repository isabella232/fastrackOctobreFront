import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faGraduationCap, faChartLine, faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
import { phoneQuery} from '../../services/media-queries';


import Navbar from '../commons/GlobalsStyles/nav';


const IconContainer = styled.div`width: 80px;
height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
${phoneQuery`
flex-direction: row;
height: 50px;
width: 100%;
margin-left: 50px;
`};
`;


const Img = styled.img`width: 80px;
position: absolute;
top: 0;
${phoneQuery`
width: 50px;
`};
`;

const LinkDisconect = styled(Link)`
    color: #FFF; 
    width: 80px; 
    position: absolute; 
    top: calc(100% - 48px);
    ${phoneQuery`
      position: absolute; 
      top: 70px;
      left: 15px;
    `};

    
`;


const Nav = () => (
  <Navbar>
    <Link to="/">
      <Img src="/styles/img/Logo-LV.png" alt="" />
    </Link>
    <IconContainer>
      <Link to="/"><FontAwesomeIcon icon={faUser} style={{ color: '#FFF', width: '80px' }} size="2x" /></Link>
      <Link to="/"><FontAwesomeIcon icon={faGraduationCap} style={{ color: '#FFF', width: '80px' }} size="2x" /></Link>
      <Link to="/"><FontAwesomeIcon icon={faChartLine} style={{ color: '#FFF', width: '80px' }} size="2x" /></Link>
    </IconContainer>
    <LinkDisconect to="/" onClick={() => localStorage.removeItem('token')}><FontAwesomeIcon
      icon={faDoorOpen}
      size="1x"
    />
    </LinkDisconect>
  </Navbar>
);


export default Nav;
