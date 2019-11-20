import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
// import { getPartner } from '../services/client';
import styled from '@emotion/styled';

import Nav from 'src/components/Nav';
import TextHeader from 'src/components/commons/TextHeader';
import FixedButton from 'src/components/FixedButton';
import Picture from 'src/components/commons/picture';
import CardPartner from 'src/components/commons/cardPartner';
import Container from 'src/components/commons/container';

const Card = styled(CardPartner)`
width : 80%;
height : 100%;
margin-top: 3rem; 
position: relative; 
`;


const PartnerDetails = () => {
  const [partner, setPartner] = useState();
  const { partnerId } = useParams();
  const baseUrl = "/src/styles/";

  useEffect(() => {
    axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`)
      .then((res) => {
        setPartner(res.data);
      });
  }, []);



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
                {console.log(partner.avatar)}
              </Card>
            </Container>
          </>
        )}
    </>
  );
};

export default PartnerDetails;
