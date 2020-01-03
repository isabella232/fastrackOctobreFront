import styled from '@emotion/styled';

// <HorizontalFlex></HorizontalFlex>
const HorizontalFlex = styled.div`
  display: flex;
  justify-content: center; 

  margin: ${(props) => props.margin || '0px'};
  margin-right: ${(props) => props.marginR || '0px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  position: ${(props) => props.position || 'relative'};
  width: ${(props) => props.width || '0px'};
`;

export default HorizontalFlex; 