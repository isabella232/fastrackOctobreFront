// Distant imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import styled from '@emotion/styled';

// Locals Imports
import Nav from 'src/components/Nav';
import TextHeader from 'src/components/commons/TextHeader';
import FixedButton from 'src/components/FixedButton';
import Picture from 'src/components/commons/picture';
import CardPartner from 'src/components/commons/cardPartner';
import Container from 'src/components/commons/container';
import { H3, P, SpanBold } from 'src/components/commons/text';
import { calculate } from 'specificity';

// Styles

const Card = styled(CardPartner)`
width : 80%;
height : 100%;
margin-top: 3rem; 
position: relative; 
justify-content : flex-start;
padding-top : 5rem;
`;

const PBold = styled.p`
font-weight: bold;
display: 'inline' 

`;

const HorizontalFlex = styled.div`
  display: flex;
  justify-content: center; 
`;

const VerticalFlex = styled.div`
  display : flex; 
  flex-direction : column;
  justify-content: center; 
`;


const BoxHead = styled.div`
  border-bottom: 1px solid grey; 
  width : 80%;
  text-align: center; 
  padding-bottom: 1rem; 
`;

const BoxGoals = styled.div`
  border-bottom: 1px solid grey; 
  width : 80%;
  text-align: center; 
  padding-bottom: 1rem; 
`;


// Component :

const PartnerDetails = () => {

  // Hooks :
  const [partner, setPartner] = useState();
  const { partnerId } = useParams();
  const baseUrl = "/src/styles/";

  useEffect(() => {
    axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`)
      .then((res) => {
        setPartner(res.data);
      });
  }, []);

  // Functions :

  const ConvertToTime = (InitialTime) => {
    const years = Math.floor(InitialTime / 12);
    const months = InitialTime % 12;
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
            <TextHeader title={`${partner.firstName || 'toto'} ${partner.lastName}`} />
            <FixedButton />
            <Container>
              <Card>
                <Picture image={`${baseUrl}${partner.avatar}`} />
                <BoxHead>
                  <H3 style={{ fontSize: '2rem' }}>{`${partner.job}`}</H3>
                  <P> {ConvertToTime(partner.experience)} </P>
                  <HorizontalFlex>
                    <PBold style={{ margin: '.8rem 0 0rem .3rem' }}>Société actuelle : </PBold>
                    <P style={{ margin: '.8rem 0 0rem .3rem' }}>{`${partner.customer}`}</P>
                  </HorizontalFlex>
                  <HorizontalFlex>
                    <PBold style={{ margin: '.8rem 0 .8rem .3rem' }}>Projet : </PBold>
                    <P style={{ margin: '.8rem 0 .8rem .3rem' }}>{`${partner.project}`}</P>
                  </HorizontalFlex>
                </BoxHead>

                <BoxGoals>
                  <HorizontalFlex>
                    <H3 style={{ fontSize: '2rem' }}>Objectifs</H3>
                  </HorizontalFlex>
                  <HorizontalFlex style={{ justifyContent: 'space-between', alignItems: 'baseline', width: '100%' }}>
                    <VerticalFlex style={{ marginRight: '2rem', maxWidth: 'calc(100%/3)' }}>
                      <PBold style={{ margin: '.8rem 0 .8rem .3rem', display: 'block' }}>Court Terme </PBold>
                      <P style={{ margin: '.8rem 0 .8rem .3rem' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet felis at massa varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Cras semper pellentesque ipsum.   </P>
                    </VerticalFlex>
                    <VerticalFlex style={{ marginRight: '2rem', maxWidth: 'calc(100%/3)' }}>
                      <PBold style={{ margin: '.8rem 0 .8rem .3rem' }}>Moyen Terme </PBold>
                      <P style={{ margin: '.8rem 0 .8rem .3rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at semper sapien. Donec sit amet felis at massa varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Nulla facilisi. Cras semper pellentesque ipsum. </P>
                    </VerticalFlex>
                    <VerticalFlex>
                      <PBold style={{ margin: '.8rem 0 .8rem .3rem' }}>Long Terme</PBold>
                      <P style={{ margin: '.8rem 0 .8rem .3rem' }}>Lorem ipsum dolor sit amet. Phasellus at semper sapien. Varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Nulla facilisi. Cras semper pellentesque ipsum. </P>
                    </VerticalFlex>
                  </HorizontalFlex>
                </BoxGoals>


                {console.log(partner)}
              </Card>
            </Container>
          </>
        )}
    </>
  );
};

export default PartnerDetails;
