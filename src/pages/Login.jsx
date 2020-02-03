import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { faUserNinja, faKey } from '@fortawesome/free-solid-svg-icons';
import { setToken } from '../Helper/Partner/localStorage';
import { sendAuth } from '../services/client';

import {
  MainLoginContainer,
  LoginContainer,
  LogoContainer,
  LogoLV,
  PrezContrainer,
  AppPrez,
  AppTitle,
  LoginForm,
  FieldContainer,
  Input,
  DescInput,
  Icon,
  Button,
  AnimLogin,
} from '../components/commons/LoginStyles/LoginStyles';


const Login = () => {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const history = useHistory();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: mail,
      password: pass,
    };

    sendAuth(data)
      .then(() => sendAuth(data))
      .then((token) => setToken(token.token))
      .then(() => history.push('/partner'));
      /*  .then((token) => console.log(token)) */
  };

  return (
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
        <LoginForm onSubmit={(e) => handleSubmit(e)}>
          <FieldContainer>
            <Icon icon={faUserNinja} />
            <DescInput>
              Courriel
            </DescInput>
            <Input type="email" name="email" defaultValue={mail} onChange={(e) => setMail(e.target.value)} />
          </FieldContainer>

          <FieldContainer>
            <Icon icon={faKey} />
            <faKey />
            <DescInput>
              Password
            </DescInput>
            <Input type="password" defaultValue={pass} onChange={(e) => setPass(e.target.value)} name="password" />
          </FieldContainer>
          <Button type="submit"> Se connecter </Button>
        </LoginForm>
      </LoginContainer>
    </MainLoginContainer>
  );
};

export default Login;
