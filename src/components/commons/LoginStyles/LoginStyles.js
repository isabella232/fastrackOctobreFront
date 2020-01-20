import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// styled component list
// MainLoginContainer, LoginContainer, LogoContainer, LogoLV, PrezContrainer, AppPrez, AppTitle, LoginForm, FieldContainer, Input, DescInput, Icon, Link2

export const Button = styled.button`
margin: 2rem 0 0 2rem;
width: 10rem;
min-height: 2rem; 
max-height: 2rem; 
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
  /* background-color: pink;
  opacity: 10%;  */
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`;

export const LoginContainer = styled.div`
  width: 40%;
  height: 50vh; 
  background-color: white;
  opacity: 100%; 
  margin: 0;
  display : flex;
  flex-direction : row;
  align-items : center; 
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
margin: 2rem;  
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