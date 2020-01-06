import styled from '@emotion/styled';

// <VerticalFlex></VerticalFlex>
const VerticalFlex = styled.div`
  display : flex; 
  flex-direction : column;

  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  width: ${(props) => props.width};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export default VerticalFlex;
