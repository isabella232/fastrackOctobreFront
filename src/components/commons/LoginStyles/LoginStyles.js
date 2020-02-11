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
margin: 1.5vmin 0 0 5rem;
width: 10rem;
min-height: 2rem; 
max-height: 2rem; 
background-color:  ${(props) => props.theme.colors.primary};
border-radius: 25px;
border: none; 
color: ${(props) => props.theme.colors.white};
font-size: 0.8em;
font-weight: bold; 
:active {
  background-color: ${(props) => props.theme.colors.accentLight};
}
:hover {
  opacity: .9;
}
`;

export const MainLoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display : flex; 
  align-items: center;
  margin: auto;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const LoginContainer = styled.div`
  opacity: 1;
  width: 40%;
  min-height: 300px;
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
  min-height: 300px;
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
`;

export const AppTitle = styled.h1`
font-size: 1.5rem;
font-weight: 700;
margin-bottom : 1rem;
`;

export const LoginForm = styled.form`
width : 40%;
min-height : 150px;
height : 40%;
margin-left: 1.5rem;
display : flex;
flex-direction : column;
`;

export const FieldContainer = styled.div`
width : 100%;
display : flex;
position : relative;
margin: 2rem;  
`;

export const Input = styled.input`
width : 100%;
border : none;
border-bottom : 1px solid ${(props) => props.theme.colors.primary};
background : none;
color: ${(props) => props.theme.colors.accentDark};
font-size: 2vmin;
padding-bottom: 1vmin;
font-weight: 300;
`;

export const DescInput = styled.p`
width : 100%;
position : absolute;
top : -2rem;
left : 2.5rem;
color : ${(props) => props.theme.colors.accentDark};
`;

export const Icon = styled(FontAwesomeIcon)`
  margin : 0 1em;
  color: ${(props) => props.theme.colors.accentDark};
`;
