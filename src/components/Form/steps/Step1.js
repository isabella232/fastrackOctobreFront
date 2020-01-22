import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faUser, faBriefcase, faUpload,
} from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import HorizontalFlex from '../../commons/horizontalFlex';
import {
  Button,
  Input,
  InputFile,
  Select,
  Label,
} from '../../commons/Form/FormStyle';

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

const FlexSpaceBetween = styled(HorizontalFlex)`
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const FlexColumn = styled(HorizontalFlex)`
  flex-direction: column;
`;

const InputNumber = styled(Input)`
  width: 70%;
  margin: 0;
`;

const Form = (props) => (
  <>
    <HorizontalFlex width="100%" alignItems="center">
      <Title>Ajouter un partner</Title>
    </HorizontalFlex>
    <FlexColumn>
      <WhiteP>Sélectionnez une photo de profil</WhiteP>
      <Label htmlFor="image" url={props.image}>
        {!props.image && (
          <FontAwesomeIcon icon={faUpload} style={{ color: '#282828' }} size="1x" />
        )}
      </Label>
      <InputFile name="avatar" type="file" accept="image/png, image/jpeg, image/jpg, image.svg" id="image" onChange={props.changeImage} required />
    </FlexColumn>
    <HorizontalFlex width="100%" alignItems="center">

      <FontAwesomeIcon icon={faUser} style={{ color: '#FFF' }} size="1x" />
      <P>Informations personelles</P>
    </HorizontalFlex>
    <FlexColumn>
      <FlexSpaceBetween>
        <WhiteP>Prénom</WhiteP>
        <Input name="firstName" placeholder="Jean" onChange={props.change} required />
      </FlexSpaceBetween>
      <FlexSpaceBetween>
        <WhiteP>Nom</WhiteP>
        <Input name="lastName" placeholder="Dupuis" onChange={props.change} required />
      </FlexSpaceBetween>
      <FlexSpaceBetween>
        <WhiteP>Tél.</WhiteP>
        <Input name="phoneNumber" type="tel" placeholder="0634256172" onChange={props.change} required />
      </FlexSpaceBetween>
      <FlexSpaceBetween>
        <WhiteP>E-mail</WhiteP>
        <Input name="email" type="email" placeholder="Jean.dupuis@link-value.fr" onChange={props.change} required />
      </FlexSpaceBetween>
    </FlexColumn>
    <HorizontalFlex width="100%" alignItems="center">
      <FontAwesomeIcon icon={faBriefcase} style={{ color: '#FFF' }} size="1x" />
      <P>Informations professionnelles</P>
    </HorizontalFlex>
    <FlexColumn>
      <FlexSpaceBetween>
        <WhiteP>Métier</WhiteP>
        <Input name="job" placeholder="Développeur" onChange={props.change} required />
      </FlexSpaceBetween>
      <FlexSpaceBetween>
        <WhiteP>Exp.</WhiteP>
        <InputNumber name="experience" placeholder="3 ans" type="number" min="0" onChange={props.change} required />
      </FlexSpaceBetween>
      <FlexSpaceBetween>
        <WhiteP>Client</WhiteP>
        <Select name="customer" onChange={props.change} id="select">
          {/* J'attends d'avoir les clients en bdd pour map */}
          <option>Sélectionnez un client</option>
          <option>FTV</option>
          <option>M6</option>
          <option>Sodexo</option>
          <option>Keplr</option>
          <option>Booster</option>
        </Select>
      </FlexSpaceBetween>
      <FlexSpaceBetween>
        {document.getElementById('select') === 'Booster'
          && (
            <>
              <WhiteP> Projet</WhiteP>
              <Input name="project" placeholder="Mister Aslphalt" onChange={props.change} />
            </>
          )}
      </FlexSpaceBetween>
    </FlexColumn>
    <HorizontalFlex width="100%" alignItems="center">
      <Button type="submit">Suivant</Button>
    </HorizontalFlex>
  </>
);

export default Form;
