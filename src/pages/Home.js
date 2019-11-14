import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import Nav from 'src/components/Nav';
import TextHeader from 'src/components/TextHeader';
import FixedButton from 'src/components/FixedButton';
import Card from 'src/components/Card';
import Container from 'src/components/commons/container';

const partner = {
  wait: 250,
  firstname: 'Jean',
  lastname: 'Dupuis',
  image: 'src/styles/cat1.png',
  jobs: 'Développeur web front-end',
  firstTechnoName: 'React',
  secondTechnoName: 'Vue',
  thirdTechnoName: 'Angular',
  firstTechno: 'src/styles/img/react.png',
  secondTechno: 'src/styles/img/vue.png',
  thirdTechno: 'src/styles/img/angular.png',
};

const partner2 = {
  wait: 700,
  firstname: 'Jean',
  lastname: 'Dupuis',
  image: 'src/styles/cat1.png',
  jobs: 'Développeur web front-end',
  firstTechnoName: 'React',
  secondTechnoName: 'Vue',
  thirdTechnoName: 'Angular',
  firstTechno: 'src/styles/img/react.png',
  secondTechno: 'src/styles/img/vue.png',
  thirdTechno: 'src/styles/img/angular.png',
};

const Link2 = styled(Link)`
  display: flex;
  width: 50%;
  height: 49vh;
  flex-wrap: wrap;
`;

const Home = () => (
  <div>
    <Nav />
    <TextHeader title="Partners" subtitle="Liste des partnes enregistrés" />
    <FixedButton />
    <Container>
      <Link2 to="/partner"><Card partner={partner} /></Link2>
      <Link2 to="/partner"><Card partner={partner} /></Link2>
      <Link2 to="/partner"><Card partner={partner2} /></Link2>
      <Link2 to="/partner"><Card partner={partner2} /></Link2>
    </Container>
  </div>

);

export default Home;
