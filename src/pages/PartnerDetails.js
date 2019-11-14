import React from 'react';

import Nav from 'src/components/Nav';
import TextHeader from 'src/components/TextHeader';
import FixedButton from 'src/components/FixedButton';
import Container from 'src/components/commons/container';

const PartnerDetails = () => (
  <div>
    <Nav />
    <TextHeader title="Jean Dupuis" subtitle="test" />
    <FixedButton />
    <Container>
      <p>coucou je suis un test</p>
    </Container>
  </div>

);

export default PartnerDetails;
