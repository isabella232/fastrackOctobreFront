import styled from '@emotion/styled';

// <VerticalFlex></VerticalFlex>
const VerticalFlex = styled.div`
  display : flex; 
  flex-direction : column;

  position: ${(props) => props.position || 'relative'};
  margin: ${(props) => props.margin || '0px'};
  margin-top: ${(props) => props.marginTop || '0px'};
  width: ${(props) => props.width || '0px'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
`;

export default VerticalFlex;