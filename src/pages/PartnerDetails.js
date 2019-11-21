import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

import Nav from 'src/components/Nav';
import TextHeader from 'src/components/TextHeader';
import FixedButton from 'src/components/FixedButton';


const PartnerDetails = () => {
  const [partner, setPartner] = useState({});
  const { partnerId } = useParams();

  useEffect(() => {
    axios.get(`https://fasttrack-octobre-back.herokuapp.com/api/partner/${partnerId}`)
      .then((res) => {
        const { data } = res;
        setPartner(data);
      });
  }, []);

  if (partner) {
    return (
      <>
        <Nav />
        <FixedButton />
        <TextHeader title={`${partner.firstName} ${partner.lastName}`} />
      </>
    );
  }
};
export default PartnerDetails;
