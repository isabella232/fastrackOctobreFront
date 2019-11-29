import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import styled from '@emotion/styled';

import Nav from '../components/Nav';
import TextHeader from '../components/commons/TextHeader';
import FixedButton from '../components/FixedButton';
import Picture from '../components/commons/picture';
import CardPartner from '../components/commons/cardPartner';
import ContainerCommon from '../components/commons/container';
import { H3, P } from '../components/commons/text';
import {
  Rect, HorizontalFlex, VerticalFlex, Line, Ellipse, Button, BoxHead, BoxGoals, BoxSkills,
} from './styles';
// Overloaded Styles

const Container = styled(ContainerCommon)`
height: 100%;
`;

// <Card></Card>
const Card = styled(CardPartner)`
width : 90%;
height : 100%;
margin-top: 3rem; 
position: relative; 
justify-content : flex-start;
padding-top : 5rem;
`;

// Données :

const categoriesDatas = [
  'Front',
  'Back',
  'Mobile',
  'Infra Admin',
  'IASS',
  'Intégration',
  'Conteneur',
  'Virtualisation',
  'Scripting',
  'Monitoring',
  'Infra as',
  'Méthodologie',
  'Data Sience',
  'Data Ingé',
  'BDD',
];


// Component :

const PartnerDetails = () => {
  // Hooks :
  const [partner, setPartner] = useState();
  const { partnerId } = useParams();

  useEffect(() => {
    axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`)
      .then((res) => {
        setPartner(res.data);
      });
  }, []);

  // Varibales :

  const baseUrl = '../styles/';

  // Functions :

  const ConvertToTime = (initialTime) => {
    const years = Math.floor(initialTime / 12);
    const months = initialTime % 12;
    return [
      `Depuis ${years} ans et ${months} mois.`,
    ];
  };


  // Display :
  return (
    <>
      {partner
        && (
          <>
            <Nav />
            <TextHeader title={`${partner.firstName} ${partner.lastName}`} />
            <FixedButton />
            <Container>
              <Card>
                <Picture image={`${baseUrl}${partner.avatar}`} />
                <BoxHead>
                  <H3 fontSize="2rem">{`${partner.job}`}</H3>
                  <P> {ConvertToTime(partner.experience)} </P>
                  <HorizontalFlex>
                    <P fontWeight="bold" margin=".8rem 0 .8rem .3rem">Société actuelle : </P>
                    <P margin=".8rem 0 .8rem .3rem">{`${partner.customer}`}</P>
                  </HorizontalFlex>
                  <HorizontalFlex>
                    <P fontWeight="bold" margin=".8rem 0 .8rem .3rem">Projet : </P>
                    <P margin=".8rem 0 .8rem .3rem">{`${partner.project}`}</P>
                  </HorizontalFlex>
                </BoxHead>

                <BoxGoals>
                  <HorizontalFlex>
                    <H3 fontSize="2rem">Objectifs</H3>
                  </HorizontalFlex>
                  <Line margin="2rem 0" display="flex" justifyContent="space-around">
                    <Ellipse />
                    <Ellipse margin="0 5%" />
                    <Ellipse />
                  </Line>
                  <HorizontalFlex justifyContent="space-between" alignItems="baseline" width="100%">
                    <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
                      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem" display="block">Court Terme </P>
                      <P margin=".8rem 0 .8rem .3rem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet felis at massa varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Cras semper pellentesque ipsum.   </P>
                    </VerticalFlex>
                    <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
                      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem">Moyen Terme</P>
                      <P margin=".8rem 0 .8rem .3rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at semper sapien. Donec sit amet felis at massa varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Nulla facilisi. Cras semper pellentesque ipsum. </P>
                    </VerticalFlex>
                    <VerticalFlex width="calc(100%/3)">
                      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem">Long Terme</P>
                      <P margin=".8rem 0 .8rem .3rem">Lorem ipsum dolor sit amet. Phasellus at semper sapien. Varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Nulla facilisi. Cras semper pellentesque ipsum. </P>
                    </VerticalFlex>
                  </HorizontalFlex>
                </BoxGoals>

                <BoxSkills>
                  <H3 fontSize="2rem">Compètences</H3>
                  {categoriesDatas.map((categorie) => (
                    <Button>{categorie}</Button>
                  ))}

                  <P fontWeight="bold" margin=".8rem 0 .8rem .3rem" display="block"> Liste des technologies acquises </P>

                  <VerticalFlex>
                    <HorizontalFlex>
                      <Rect background="#C7ECEE" />
                      <Rect background="#7ED6DF" />
                      <Rect background="#22A6B3" />
                      <Rect background="#3C6382" />
                    </HorizontalFlex>
                  </VerticalFlex>

                </BoxSkills>


                {console.log(partner)}
              </Card>
            </Container>
          </>
        )}
    </>
  );
};

export default PartnerDetails;
