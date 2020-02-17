import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { faSortAlphaDownAlt, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons';
import Link2 from '../components/commons/HomeStyles/HomeStyles';
import Nav from '../components/Nav';
import TextHeader from '../components/TextHeader';
import { partnerList, filtredPartnerList } from '../services/client';
import SearchBar from '../components/commons/GlobalsStyles/searchBar';
import FixedButton from '../components/FixedButton';
import Card from '../components/Card';
import Container from '../components/commons/GlobalsStyles/container';
import FiltredButton from '../components/commons/GlobalsStyles/filterButton';
import keyGenerator from '../Helper/KeyGenerator';
import { addList, clearStoreList } from '../store/actions';
import Loading from '../components/Loading';


const Home = () => {
  const [asc, setAsc] = useState(false);
  const [desc, setDesc] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector(({ partnerReducer }) => partnerReducer.list);


  const ascFilter = () => {
    setAsc(!asc);
    setDesc(desc);
  };

  const descFilter = () => {
    setAsc(asc);
    setDesc(!desc);
  };

  const getList = () => {
    if (asc === true && desc === false) {
      filtredPartnerList('asc').then((res) => dispatch(addList(res.data)));
    }
    else if (asc === false && desc === true) {
      filtredPartnerList('desc').then((res) => dispatch(addList(res.data)));
    }
    else {
      partnerList().then((res) => dispatch(addList(res.data)));
    }
  };

  useEffect(() => {
    dispatch(clearStoreList([]));
    return getList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Nav />
      <TextHeader title="Partners" subtitle="Liste des partners enregistrés" />
      <FiltredButton icon1={faSortAlphaDownAlt} click={ascFilter} asc={asc} />
      <FiltredButton icon2={faSortAlphaDown} click={descFilter} desc={desc} />
      <FixedButton />
      <SearchBar top="2rem" />
      <Container>
        {list ? list.map((partner, index) => {
          const noFav = { id: partner.id, name: '', icon: 'idk' };
          const fav = {
            fav1: partner.favorites[0] || noFav,
            fav2: partner.favorites[1] || noFav,
            fav3: partner.favorites[2] || noFav,
          };
          return (
            <Link2 key={keyGenerator(partner.id)} to={`/partner/${partner.id}`}>
              <Card
                key={keyGenerator(partner.lastName)}
                partner={{
                  id: partner.id,
                  wait: (index * 250),
                  firstname: partner.firstName,
                  lastname: partner.lastName,
                  image: partner.avatar,
                  jobs: partner.job,
                  firstTechnoName: fav.fav1.name,
                  secondTechnoName: fav.fav2.name,
                  thirdTechnoName: fav.fav3.name,
                  firstTechno: `./styles/img/${fav.fav1.icon}.png`,
                  secondTechno: `./styles/img/${fav.fav2.icon}.png`,
                  thirdTechno: `./styles/img/${fav.fav3.icon}.png`,
                }}
              />
            </Link2>
          );
        })
          : <Loading />}
      </Container>
    </>

  );
};


export default Home;
