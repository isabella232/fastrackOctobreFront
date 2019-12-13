import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Loading from '../components/Loading';
import ChronoLine from '../components/commons/chronoLine';
import RangeCursor from '../components/commons/RangeCursor';
import Nav from '../components/Nav';
import TextHeader from '../components/commons/TextHeader';
import FixedButton from '../components/FixedButton';
import Picture from '../components/commons/picture';
import CardPartner from '../components/commons/cardPartner';
import ContainerCommon from '../components/commons/container';
import { H3, P } from '../components/commons/text';
import {
  SkillsSlideContainer, HorizontalFlex, BoxHead, BoxGoals, BoxSkills,
} from '../components/commons/otherStyles';
import convertSkills from '../Helper/Skills';
import { initSkills, getPartnerDetails, setTechno } from '../store/actions';
import SubContainer from '../components/SubContainer';
import keyGenerator from '../Helper/KeyGenerator';
import { partnerReciever } from '../services/client';
import filterSkillsPartner from '../Helper/Partner/filterSkillsPartner';

const Container = styled(ContainerCommon)`
height: 100%;
`;

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

const PartnerDetails = () => {
  const [partner, setPartner] = useState({});
  const [time, setTime] = useState(0);
  const { partnerId } = useParams();
  const dispatch = useDispatch();
  const skills = useSelector(({ skillsReducer }) => skillsReducer.skillsList);
  const partner = useSelector(({ partnerReducer }) => partnerReducer.partnerDetails);
  const categorys = useSelector(({ skillsReducer }) => skillsReducer.categoriesList);
  const techno = useSelector(({ skillsReducer }) => skillsReducer.currentTechno);


  useEffect(() => {
    partnerReciever(partnerId)
      .then((response) => {
        dispatch(getPartnerDetails(response.data));
        setTime(response.convertedTime);
      });
    convertSkills().then((data) => dispatch(initSkills(data)));
  }, []);

  const baseUrl = '../styles/';

  const handleSet = (text) => {
    dispatch(setTechno(text));
  };

  return (
    <>
      {Object.getOwnPropertyNames(partner).length < 1
        ? <Loading />
        : (
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
                </BoxGoals>

                <BoxSkills>
                  <H3 fontSize="2rem">Compètences</H3>

                  {categorys.map((category) => (
                    <SubContainer key={`${category.name}_${category.id}`} category={category} setTechno={handleSet} />
                  ))}

                  <P fontWeight="bold" margin="2rem 0 2rem .3rem" display="block"> Niveau des technologies acquises </P>
                  <SkillsSlideContainer justifyContent="center">

                    {Object.getOwnPropertyNames(skills).length === 0
                      || skills[techno]
                        .filter((skill) => filterSkillsPartner(skill, partner.skills))
                        .map((res) => (
                          <RangeCursor key={keyGenerator(res.name)} name={res.name} icon={res.icon} />
                        ))}

                  </SkillsSlideContainer>

                </BoxSkills>
              </Card>
            </Container>
            );
          </>
        )}
    </>
  );
};

export default PartnerDetails;
