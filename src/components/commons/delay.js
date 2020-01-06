import styled from '@emotion/styled';
import CardPartner from './cardPartner';

const Delay = styled(CardPartner)`
  transition: 
    opacity 0.9s cubic-bezier(0.86, 0, 0.07, 1),
    transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  opacity: 0;

  &:hover {
    transform: scale(1.04);
  }

  ${(props) => props.animate && `
    opacity: 1;
  `}
`;

export default Delay;
