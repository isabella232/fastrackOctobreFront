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
import Img from '../components/commons/logoTechno';
import TextHeader from '../components/commons/TextHeader';
import FixedButton from '../components/FixedButton';
import Picture from '../components/commons/picture';
import CardPartner from '../components/commons/cardPartner';
import ContainerCommon from '../components/commons/container';
import { H3, P } from '../components/commons/text';

import SkillsSlideContainer from '../components/commons/skillsSlideContainer';
import HorizontalFlex from '../components/commons/horizontalFlex';
import BoxHead from '../components/commons/boxHead';
import BoxGoals from '../components/commons/boxGoals';
import BoxSkills from '../components/commons/boxSkills';

import convertSkills from '../Helper/Skills';
import { initSkills, getPartnerDetails, setTechno } from '../store/actions';
import SubContainer from '../components/SubContainer';
import keyGenerator from '../Helper/KeyGenerator';
import { partnerReciever, skillsSender } from '../services/client';
import { filterSkillsPartnerActive, filterSkillsPartnerUnactive } from '../Helper/Partner/filterSkillsPartner';
import Button from '../components/commons/button';
import OnFlyForm from '../components/OnFlyForm/OnFlyForm';

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
const DarkButton = styled(Button)`
  background: ${((props) => props.theme.colors.bodyBg)};
  font-size: 1rem;
  padding: 0.8rem 2rem;
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
  const [time, setTime] = useState(0);
  const [skillEdit, setSkillsEdit] = useState(false);
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

  useEffect(() => {
    skillsSender(partner);
  }, [partner]);

  const switchEdit = () => {
    setSkillsEdit(!skillEdit);
  };

  const handleSet = (text) => {
    dispatch(setTechno(text));
  };

  return (
    <>
      {partner && Object.getOwnPropertyNames(partner).length < 1
        ? <Loading />
        : (
          <>
            {partner && (
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
                    <Picture image={partner.avatar} />
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
                        <OnFlyForm title="Court terme" />
                        <OnFlyForm title="Moyen terme" />
                        <OnFlyForm title="Long terme" />
                      </HorizontalFlex>
                    </BoxGoals>

                    <BoxSkills>
                      <H3 fontSize="2rem">Compètences</H3>

                      {categorys && categorys.map((category) => (
                        <SubContainer key={`${category.name}_${category.id}`} category={category} setTechno={handleSet} />
                      ))}

                      <P fontWeight="bold" margin="2rem 0 2rem .3rem" display="block"> Niveau des technologies acquises </P>
                      <SkillsSlideContainer justifyContent="center">

                        {Object.getOwnPropertyNames(skills).length === 0
                          || skills[techno]
                            .filter((skill) => filterSkillsPartnerActive(skill, partner.skills))
                            .map((res) => (
                              partner.skills.map((partnerSkill) => partnerSkill.id === res.id
                                && (
                                  <HorizontalFlex marginTop="2rem" justifyContent="space-between" width="55%" minW="" maxW="" margin="2rem auto">
                                    <HorizontalFlex width="100%" justifyContent="flex-start">
                                      <Img height="2rem" width="2rem" margin="0 2rem 0 0" src={`./styles/img/${res.icon}.png`} alt="techno-Logo" />
                                      <P fontWeight="bold" padding=".5rem 2rem 0rem 0">{res.name}</P>
                                    </HorizontalFlex>
                                    <RangeCursor key={`${keyGenerator(res.name)}_${res.id}`} level={partnerSkill.level} res={res} />
                                  </HorizontalFlex>
                                ))

                            ))}
                        {skillEdit
                          && skills[techno]
                            .filter((skill) => filterSkillsPartnerUnactive(skill, partner.skills))
                            .map((res) => (
                              <HorizontalFlex marginTop="2rem" justifyContent="space-between" width="55%" minW="" maxW="" margin="2rem auto">
                                <HorizontalFlex width="100%" justifyContent="flex-start">
                                  <Img height="2rem" width="2rem" margin="0 2rem 0 0" src={`./styles/img/${res.icon}.png`} alt="techno-Logo" />
                                  <P fontWeight="bold" padding=".5rem 2rem 0rem 0">{res.name}</P>
                                </HorizontalFlex>
                                <RangeCursor key={`${keyGenerator(res.name)}_${res.id}`} res={res} level={0} />
                              </HorizontalFlex>
                            ))}
                      </SkillsSlideContainer>

                      {skillEdit
                        ? <DarkButton onClick={switchEdit}>Terminer l'évaluation</DarkButton>
                        : <DarkButton onClick={switchEdit}>Lancer une évaluation</DarkButton>}
                    </BoxSkills>
                  </Card>
                </Container>
              </>
            )}
          </>
        )}
    </>
  );
};

export default PartnerDetails;
