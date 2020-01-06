import styled from '@emotion/styled';

// <HorizontalFlex></HorizontalFlex>
const HorizontalFlex = styled.div`
  display: flex;
  justify-content: center; 

  margin: ${(props) => props.margin};
  margin-right: ${(props) => props.marginR};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  position: ${(props) => props.position};
  width: ${(props) => props.width};
`;

export default HorizontalFlex;
