import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faBriefcase, faUpload,
} from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

import { H3, WhiteP } from '../../commons/text';

const Title = styled(H3)`
  color: #FFF;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  padding: 1rem;
`;

const P = styled(WhiteP)`
  margin: 1rem;
  font-weight: bold;
`;

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

const Button = styled.button`
  text-align: center;
  padding: 0.75rem 3rem;
  width: 70%;
  cursor: pointer;
  background-color: #2F3640;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: none;
  margin-top: 1.5rem;
  transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover{
    background-color: #fff;
    color: #2F3640;
  }
`;


const TextArea = styled.textarea`
  outline: none;
  resize: none;
  padding: 0.6rem 1rem;
  border-radius: 15px;
  margin: 1rem 0;
  color: #2F3640;
  font-weight: 400;
  font-size: 0.8rem;
  border: 2px solid #2F3640;
  width: 100%;
  height: 16vh;
  text-align: center;
`;


const Form = (props) => (
  <>
    <Flex>
      <Title>Ajouter un partner</Title>
    </Flex>

    <Flex>
      <FontAwesomeIcon icon={faUser} style={{ color: '#FFF' }} size="1x" />
      <P>Objectifs professionnels</P>
    </Flex>

    <FlexColumn>

      <FlexColumn>
        <WhiteP>Court terme</WhiteP>
        <TextArea name="shortObjectif" placeholder="Voici le premier objectif" onChange={props.change} required />
      </FlexColumn>

      <FlexColumn>
        <WhiteP>Moyen terme</WhiteP>
        <TextArea name="mediumObjectif" placeholder="Voici le deuxième objectif" onChange={props.change} required />
      </FlexColumn>

      <FlexColumn>
        <WhiteP>Long terme</WhiteP>
        <TextArea name="largeObjectif" type="tel" placeholder="Voici le troisième objectif" onChange={props.change} required />
      </FlexColumn>

    </FlexColumn>

    <FlexColumn>
      <Button onClick={props.click}>Précédent</Button>
      <Button type="submit">Envoyer</Button>
    </FlexColumn>
  </>
);

export default Form;
