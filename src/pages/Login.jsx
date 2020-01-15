import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNinja, faKey } from '@fortawesome/free-solid-svg-icons';

const MainLoginContainer = styled.div`
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

const LoginContainer = styled.div`
  width: 40%;
  height: 50vh; 
  background-color: white;
  opacity: 100%; 
  margin: 0;
  display : flex;
  flex-direction : row;
  align-items : center; 
`;

const LogoContainer = styled.div`
  width: 60%;
  height: 50vh; 
  background: ${(props) => props.theme.colors.primary};
  opacity: 100%; 
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const LogoLV = styled.img`
width: 30vh;
height: 30vh;
align-self: center;
margin-right : 12rem;
`;

const PrezContrainer = styled.div`
min-width : 20vh;
max-width : 40vh; 
margin-top : 1rem; 
margin-left : 1rem;
color: ${(props) => props.theme.colors.white};
`;

const AppPrez = styled.p`
font-size: 1rem;
font-weight: light italic;
`;

const AppTitle = styled.h1`
font-size: 1.5rem;
font-weight: 700;
margin-bottom : 1rem;
`;

const LoginForm = styled.div`
width : 40%;
min-height : 150px;
height : 40%;
margin-left: 1.5rem;
display : flex;
flex-direction : column;
/* background-color : purple;  */
`;

const FieldContainer = styled.div`
width : 100%;
display : flex;
margin: auto 0;
position : relative; 
`;

const Input = styled.input`
width : 100%;
border : none;
border-bottom : 2px solid ${(props) => props.theme.colors.primary};
background : none;

`;

const DescInput = styled.p`
width : 100%;
position : absolute;
top : -1.5rem;
left : 2.5rem;
color : ${(props) => props.theme.colors.black};
`;

const Icon = styled(FontAwesomeIcon)`
  margin : 0 1em;
  color: ${(props) => props.theme.colors.black};
`;

const Login = () => {

  const [mail, setMail] = useState();
  const [pass, setPass] = useState();

  const data = {
    login: mail,
    password: pass,
  };

  const handleChange = (e) => {
    if (e.target.type === 'email') {
      setMail(e.target.value);
      console.log(data);
    } else {
      setPass(e.target.value);
      console.log(data);
    }
  };

  return (

    <>
      <MainLoginContainer>
        <LogoContainer>
          <PrezContrainer>
            <AppTitle> SkillUp Factory</AppTitle>
            <AppPrez>
              L’app des ressources humaines développée avec amour par les Partners du FastTrack.
          </AppPrez>
          </PrezContrainer>
          <LogoLV src="./styles/img/LogoLinkValue.svg" alt="" />

        </LogoContainer>
        <LoginContainer>
          <LoginForm>
            <FieldContainer>
              <Icon icon={faUserNinja} />
              <DescInput>
                Courriel
            </DescInput>
              <Input type="email" name="email" defaultValue={mail} onChange={handleChange} />
            </FieldContainer>

            <FieldContainer>
              <Icon icon={faKey} />
              <faKey />
              <DescInput>
                Password
            </DescInput>
              <Input type="password" defaultValue={pass} name="password" />
            </FieldContainer>


          </LoginForm>
        </LoginContainer>
      </MainLoginContainer>
    </>


  );
};

export default Login;
