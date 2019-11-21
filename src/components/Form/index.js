import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';

import { H3, WhiteP } from '../commons/text';

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

const FlexSpaceBetween = styled(Flex)`
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

const Button = styled.input`
  padding: 0.75rem 3rem;
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

const Input = styled.input`
  padding: 0.4rem 1rem;
  border-radius: 15px;
  margin-left: 0.5rem;
  color: #2F3640;
  font-weight: 400;
  font-size: 0.8rem;
  width: 70%;
  border: 2px solid #2F3640;
`;

const InputFile = styled.input`
  display: none;
`;

const InputNumber = styled(Input)`
  width: 70%;
  margin: 0;
`;

const Select = styled.select`
display: block;
font-weight: 400;
color: #757575;
line-height: 1;
border: none;
padding: 0.5rem 1rem;
width: 70%;
margin: 0;
border-radius: 15px;
appearance: none;
background-color: #fff;
font-size: 0.8rem;
border: 2px solid #2F3640;
`;

const Step = styled.p`
  display: flex;
  position: absolute;
  top: 90%;
  left: 90%;
  color: #fff;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 90px;
  margin: 1rem 0;
  border: 3px solid #2F3640;
  opacity: 1;
  background-color: #DFE4EA;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-position: center;
  transition: 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  transition-property: transform, background-color;
  &:hover{
    transform: scale(1.07);
    background-color: #fff;
  }
`;

const Form = () => {
  const [imageURL, setImageURL] = useState();

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const image = e.target.files[0];

    reader.onloadend = () => {
      setImageURL(reader.result);
    };

    reader.readAsDataURL(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById('partner'));

    // J'attends d'avoir l'url pour la postRequest avant d'externaliser dans le dossier service :)
    axios({
      method: 'post',
      url: 'https://httpbin.org/post',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <form id="partner" encType="multipart/form-data" onSubmit={handleSubmit}>
      <Flex>
        <Title>Ajouter un partner</Title>
      </Flex>
      <FlexColumn>
        <WhiteP>Sélectionnez une photo de profil</WhiteP>
        <Label htmlFor="avatar" url={imageURL}>
          {!imageURL && (
            <FontAwesomeIcon icon={faUpload} style={{ color: '#282828' }} size="1x" />
          )}
        </Label>
        <InputFile name="image" type="file" accept="image/png, image/jpeg, image/jpg, image.svg" id="avatar" onChange={(e) => handleImageChange(e)} />
      </FlexColumn>
      <Flex>
        <FontAwesomeIcon icon={faUser} style={{ color: '#FFF' }} size="1x" />
        <P>Informations personelles</P>
      </Flex>
      <FlexColumn>
        <FlexSpaceBetween>
          <WhiteP>Prénom</WhiteP>
          <Input name="firstName" placeholder="Jean" />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <WhiteP>Nom</WhiteP>
          <Input name="lastName" placeholder="Dupuis" />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <WhiteP>Tél.</WhiteP>
          <Input name="tel" type="tel" placeholder="0634256172" />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <WhiteP>E-mail</WhiteP>
          <Input name="mail" type="email" placeholder="Jean.dupuis@link-value.fr" required />
        </FlexSpaceBetween>
      </FlexColumn>
      <Flex>
        <FontAwesomeIcon icon={faBriefcase} style={{ color: '#FFF' }} size="1x" />
        <P>Informations professionnelles</P>
      </Flex>
      <FlexColumn>
        <FlexSpaceBetween>
          <WhiteP>Métier</WhiteP>
          <Input name="job" placeholder="Développeur" />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <WhiteP>Exp.</WhiteP>
          <InputNumber name="xp" placeholder="3 ans" type="number" min="0" />
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <WhiteP>Client</WhiteP>
          <Select name="customer">
            {/* J'attends d'avoir les clients en bdd pour map */ }
            <option>Sélectionnez un client</option>
            <option>FTV</option>
            <option>M6</option>
            <option>Sodexo</option>
            <option>Keplr</option>
            <option>Booster</option>
          </Select>
        </FlexSpaceBetween>
        <FlexSpaceBetween>
          <WhiteP name="project">Mail</WhiteP>
          <Input placeholder="Jean.dupuis@link-value.fr" />
        </FlexSpaceBetween>
      </FlexColumn>
      <Flex>
        <Button type="submit" value="Suivant" />
      </Flex>
    </form>
  );
};

export default Form;
