import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { keyframes } from '@emotion/core';

// styled component list
// MainLoginContainer, LoginContainer, LogoContainer, LogoLV, PrezContrainer, AppPrez, AppTitle, LoginForm, FieldContainer, Input, DescInput, Icon, Link2


export const slide = keyframes`
  0% {
    width: 100%;
  }

  100% {
    width: 60%;
  }
`;

export const opacity = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`; 

export const Button = styled.button`
margin: 2rem 0 0 2rem;
width: 10rem;
height: 2rem; 
background-color:  ${(props) => props.theme.colors.primary};
border-radius: 25px;
border: none; 
color: ${(props) => props.theme.colors.white};
font-size: 0.8em;
`;

export const MainLoginContainer = styled.div`
  width: 100%;
  height: 50vh; 
  display : flex; 
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const LoginContainer = styled.div`
  opacity: 1;
  width: 40%;
  height: 50vh; 
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  left: 60%;
  margin: 0;
  display : flex;
  flex-direction : row;
  align-items : center; 
  z-index: 2;
  animation: ${opacity} 2.5s ease;
`;

export const LogoContainer = styled.div`
  width: 60%;
  height: 50vh; 
  background: ${(props) => props.theme.colors.primary};
  opacity: 100%; 
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  z-index: 3;
  animation: ${slide} 1.5s ease;
`;
export const LogoLV = styled.img`
width: 30vh;
height: 30vh;
align-self: center;
margin-right : 12rem;
`;

export const PrezContrainer = styled.div`
min-width : 20vh;
max-width : 40vh; 
margin-top : 1rem; 
margin-left : 1rem;
color: ${(props) => props.theme.colors.white};
`;

export const AppPrez = styled.p`
font-size: 1rem;
font-weight: 300;
font-style: italic;
`;

export const AppTitle = styled.h1`
font-size: 1.5rem;
font-weight: 700;
margin-bottom : 1rem;
`;

export const LoginForm = styled.div`
width : 40%;
min-height : 150px;
height : 40%;
margin-left: 1.5rem;
display : flex;
flex-direction : column;
/* background-color : purple;  */
`;

export const FieldContainer = styled.div`
width : 100%;
display : flex;
margin: auto 0;
position : relative; 
`;

export const Input = styled.input`
width : 100%;
border : none;
border-bottom : 1px solid ${(props) => props.theme.colors.primary};
background : none;

`;

export const DescInput = styled.p`
width : 100%;
position : absolute;
top : -1.5rem;
left : 2.5rem;
color : ${(props) => props.theme.colors.black};
`;

export const Icon = styled(FontAwesomeIcon)`
  margin : 0 1em;
  color: ${(props) => props.theme.colors.black};
`;

