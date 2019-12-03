import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ConvertToTime from '../Helper/ConvertToTime';
import { categoriesDatas, logoTec, nameTec } from './ProvisionalData';
import ChronoLine from '../components/commons/chronoLine';
import RangeCursor from '../components/commons/RangeCursor';
import Nav from '../components/Nav';
import TextHeader from '../components/commons/TextHeader';
import FixedButton from '../components/FixedButton';
import Picture from '../components/commons/picture';
import CardPartner from '../components/commons/cardPartner';
import ContainerCommon from '../components/commons/container';
import { H3, P } from '../components/commons/text';
import Img from '../components/commons/logoTechno';
import {
  SkillsSlideContainer, HorizontalFlex, VerticalFlex, Button, BoxHead, BoxGoals, BoxSkills,
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

const Pphone = styled(P)`
width: 50%;
left: 0;
text-align: center; 
top: -2rem;
margin: 0;
color: ${(props) => props.theme.colors.white};
position: absolute;
`;

const Pmail = styled(P)`
width: 50%;
right: 0;
text-align: center; 
top: -2rem;
margin: 0;
color: ${(props) => props.theme.colors.white};
position: absolute;

`;

const Icon = styled(FontAwesomeIcon)`
  margin : 0 1em;
  color: ${(props) => props.theme.colors.white};
`;


// Component :


const PartnerDetails = () => {
  // Hooks :
  const [partner, setPartner] = useState({});
  const [time, setTime] = useState(0);
  const { partnerId } = useParams();


  //Sortir la requette du fichier. 
  useEffect(() => {
    axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`)
      .then((res) => {
        setPartner(res.data);
        setTime(ConvertToTime(res.data.experience));
      });
  }, []);

  // Varibales :

  const baseUrl = '../styles/';

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
                <Pphone>
                  {`${partner.phoneNumber}`}
                  <Icon icon={faMobileAlt} size="1x" />
                </Pphone>
                <Pmail>
                  <Icon icon={faEnvelope} size="1x" />
                  {`${partner.email}`}
                </Pmail>
                <Picture image={`${baseUrl}${partner.avatar}`} />
                <BoxHead>
                  <H3 fontSize="2rem">{`${partner.job}`}</H3>
                  <P> {`Depuis ${time.years} ans et ${time.months} mois.`} </P>
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
                  <ChronoLine />
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
                  <P fontWeight="bold" margin="2rem 0 2rem .3rem" display="block"> Niveau des technologies acquises </P>

                  <SkillsSlideContainer justifyContent="center">
                    <HorizontalFlex marginTop="2rem" justifyContent="space-between" width="55%" minW="" maxW="" margin="2rem auto">
                      <HorizontalFlex width="100%" justifyContent="flex-start">
                        <Img height="2rem" width="2rem" margin="0 2rem 0 0" src={`./styles/img/${logoTec[7]}.png`} alt="techno-Logo" />
                        <P fontWeight="bold" padding=".5rem 2rem 0rem 0">{nameTec[7]}</P>
                      </HorizontalFlex>
                      <HorizontalFlex position="relative">
                        <RangeCursor />
                      </HorizontalFlex>
                    </HorizontalFlex>

                    <HorizontalFlex marginTop="2rem" justifyContent="space-between" width="55%" margin="2rem auto">
                      <HorizontalFlex width="100%" justifyContent="flex-start">
                        <Img height="2rem" width="2rem" margin="0 2rem 0 0" src={`./styles/img/${logoTec[4]}.png`} alt="techno-Logo" />
                        <P fontWeight="bold" padding=".5rem 2rem 0rem 0">{nameTec[4]}</P>
                      </HorizontalFlex>
                      <HorizontalFlex position="relative">
                        <RangeCursor />
                      </HorizontalFlex>
                    </HorizontalFlex>

                    <HorizontalFlex marginTop="2rem" justifyContent="space-between" width="55%" margin="2rem auto">
                      <HorizontalFlex width="100%" justifyContent="flex-start">
                        <Img height="2rem" width="2rem" margin="0 2rem 0 0" src={`./styles/img/${logoTec[3]}.png`} alt="techno-Logo" />
                        <P fontWeight="bold" padding=".5rem 2rem 0rem 0">{nameTec[3]}</P>
                      </HorizontalFlex>
                      <HorizontalFlex position="relative">
                        <RangeCursor />
                      </HorizontalFlex>
                    </HorizontalFlex>

                    <HorizontalFlex marginTop="2rem" justifyContent="space-between" width="55%" margin="2rem auto">
                      <HorizontalFlex width="100%" justifyContent="flex-start">
                        <Img height="2rem" width="2rem" margin="0 2rem 0 0" src={`./styles/img/${logoTec[8]}.png`} alt="techno-Logo" />
                        <P fontWeight="bold" padding=".5rem 2rem 0rem 0">{nameTec[8]}</P>
                      </HorizontalFlex>
                      <HorizontalFlex position="relative">
                        <RangeCursor />
                      </HorizontalFlex>
                    </HorizontalFlex>
                  </SkillsSlideContainer>

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
