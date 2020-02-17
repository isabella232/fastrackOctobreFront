import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import PictureBox from '../commons/GlobalsStyles/picture';
import Img from '../commons/GlobalsStyles/logoTechno';
import { H3, P, SpanBold } from '../commons/GlobalsStyles/text';
import Delayed from '../commons/GlobalsStyles/delayed';
import { phoneQuery } from '../../services/media-queries';


const CustomH3 = styled(H3)`
  padding: 1rem;
  margin-top: 1em;
`;

const LogoContainer = styled.div`
  display: flex;
  padding: 1.5rem 1rem;;
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

const Up = styled.div`
  text-transform: uppercase;
  ${phoneQuery`
  font-size: 2vmin;
`};
`;

const ImgBox = styled.div`
width: 7vmin;
height: 7vmin;
max-width: 80px;
max-height: 80px;

`;

const Container2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Card = ({ partner }) => (
  <Delayed wait={partner.wait}>
    <PictureBox image={partner.image} />
    <Container2>
      <CustomH3>{partner.firstname} <SpanBold>{partner.lastname}</SpanBold></CustomH3>
      <P>{partner.jobs}</P>
    </Container2>
    <LogoContainer>
      <Logo>
        <ImgBox>
          <Img src={partner.firstTechno} alt="" />
        </ImgBox>
        <Up><P>{partner.firstTechnoName}</P></Up>
      </Logo>
      <Logo>
        <ImgBox>
          <Img src={partner.secondTechno} alt="" />
        </ImgBox>
        <Up><P>{partner.secondTechnoName}</P></Up>
      </Logo>
      <Logo>
        <ImgBox>
          <Img src={partner.thirdTechno} alt="" />
        </ImgBox>
        <Up><P>{partner.thirdTechnoName}</P></Up>
      </Logo>
    </LogoContainer>
  </Delayed>
);


Card.propTypes = {
  partner: PropTypes.shape({
    image: PropTypes.string,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    jobs: PropTypes.string.isRequired,
    firstTechno: PropTypes.string,
    secondTechno: PropTypes.string,
    thirdTechno: PropTypes.string,
    firstTechnoName: PropTypes.string,
    secondTechnoName: PropTypes.string,
    thirdTechnoName: PropTypes.string,
    wait: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
