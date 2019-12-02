import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import axios from 'axios';
import { useTheme } from 'emotion-theming';

import { faSortAlphaDownAlt, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';
import Nav from '../components/Nav';
import TextHeader from '../components/TextHeader';
import FixedButton from '../components/FixedButton';
import SearchBar from '../components/commons/searchBar';
import Card from '../components/Card';
import Container from '../components/commons/container';
import FiltredButton from '../components/commons/filterButton';

const Link2 = styled(Link)`
  display: flex;
  margin: 0 5rem;
  width: 37%;
  height: 34vh;
  flex-wrap: wrap;
  margin-bottom: 8rem;
`;

const Home = () => {
  const [list, setList] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    axios.get('https://fasttrack-octobre-back.herokuapp.com/api/partner')
      .then((res) => {
        const { data } = res;
        setList(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <TextHeader title="Partners" subtitle="Liste des partners enregistrés" />
      <FiltredButton top="2.5rem" left="96%" icon={faSortAlphaDown} />
      <FiltredButton top="2.5rem" left="98%" icon={faSortAlphaDownAlt} />
      <FixedButton />
      <SearchBar top="2rem" left="81%" />
      <Container>
        {list.map((partner, index) => (
          <Link2 to={`/${partner.id}`}>
            <Card partner={{
              id: partner.id,
              wait: (index * 250),
              firstname: partner.firstName,
              lastname: partner.lastName,
              image: `./styles/${partner.avatar}`,
              jobs: partner.job,
              firstTechnoName: 'Docker',
              secondTechnoName: 'Jenkins',
              thirdTechnoName: 'CircleCI',
              firstTechno: './styles/img/docker.png',
              secondTechno: './styles/img/jenkins.png',
              thirdTechno: './styles/img/circleci.png',
            }}
            />
          </Link2>
        ))}
      </Container>
    </>
  );
};


export default Home;
