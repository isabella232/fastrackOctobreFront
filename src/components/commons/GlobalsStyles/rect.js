import styled from '@emotion/styled';

const Rect = styled.div`
  height: 2rem; 
  width : 4rem;
  border-top: ${(props) => props.BorderTop}px solid #2F3640;
  border-right: ${(props) => props.BorderRight}px solid #2F3640;
  border-bottom: ${(props) => props.BorderBottom}px solid #2F3640;
  border-left: ${(props) => props.BorderLeft}px solid #2F3640;
  opacity: ${(props) => props.opacity};
  background: ${(props) => props.background};
`;

export default Rect;
