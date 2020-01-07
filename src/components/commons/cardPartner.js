import styled from '@emotion/styled';

const CardPartner = styled.div`
  display: flex;
  width: 100%;
  height: 35vh;
  min-height: 300px;
  margin-bottom: 8rem;
  background: ${(props) => props.theme.colors.partnerBg};
  border-radius: 45px;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3rem;
`;

export default CardPartner;
