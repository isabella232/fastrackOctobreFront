import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
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
} from '../components/commons/LoginStyles/LoginStyles';


const Login = () => {
  const [mail, setMail] = useState();
  const [pass, setPass] = useState();
  const history = useHistory();
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
  };

  return (
    <MainLoginContainer>
      <LogoContainer>
        <PrezContrainer>
          <AppTitle> SkillUp Factory</AppTitle>
          <AppPrez>
            Application de suivi des compétences des partners LinkValue.
          </AppPrez>
        </PrezContrainer>
        <LogoLV src="./styles/img/LogoLinkValue.svg" alt="" />

      </LogoContainer>
      <LoginContainer>
        <LoginForm onSubmit={(e) => handleSubmit(e)}>
          <FieldContainer>
            <Icon icon={faUser} />
            <DescInput>
              Courriel
            </DescInput>
            <Input type="email" name="email" defaultValue={mail} onChange={(e) => setMail(e.target.value)} />
          </FieldContainer>

          <FieldContainer>
            <Icon icon={faKey} />
            <DescInput>
              Mot de passe
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
