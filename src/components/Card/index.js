import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import CardPartner from '../commons/cardPartner';
import PictureBox from '../commons/picture';
import Img from '../commons/logoTechno';
import { H3, P, SpanBold } from '../commons/text';

const CustomH3 = styled(H3)`
  padding: 1rem;
`;

const LogoContainer = styled.div`
  display: flex;
  padding: 1.5rem 3rem;;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  width: calc(100% / 3);
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = (props) => (
  <CardPartner>
    <PictureBox image={props.image} />
    <CustomH3>{props.firstname} <SpanBold>{props.lastname}</SpanBold></CustomH3>
    <P>{props.jobs}</P>
    <LogoContainer>
      <Logo>
        <Img src={props.firstTechno} alt="" />
        <SpanBold><P>{props.firstTechnoName}</P></SpanBold>
      </Logo>
      <Logo>
        <Img src={props.secondTechno} alt="" />
        <SpanBold><P>{props.secondTechnoName}</P></SpanBold>
      </Logo>
      <Logo>
        <Img src={props.thirdTechno} alt="" />
        <SpanBold><P>{props.thirdTechnoName}</P></SpanBold>
      </Logo>
    </LogoContainer>
  </CardPartner>
);


Card.propTypes = {
  image: PropTypes.string,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  jobs: PropTypes.string.isRequired,
  firstTechno: PropTypes.string.isRequired,
  secondTechno: PropTypes.string,
  thirdTechno: PropTypes.string,
  firstTechnoName: PropTypes.string.isRequired,
  secondTechnoName: PropTypes.string,
  thirdTechnoName: PropTypes.string,
};

export default Card;
