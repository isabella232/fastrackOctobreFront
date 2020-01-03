import styled from '@emotion/styled';

const Rect = styled.div`
  height: 2rem; 
  width : 4rem;
  border-top: ${(props) => props.BorderTop || '0'}px solid #2F3640;
  border-right: ${(props) => props.BorderRight || '0'}px solid #2F3640;
  border-bottom: ${(props) => props.BorderBottom || '0'}px solid #2F3640;
  border-left: ${(props) => props.BorderLeft || '0'}px solid #2F3640;
  border-color: ${(props) => props.theme.colors.black || '#FFF'};
  opacity: ${(props) => props.opacity || '1'};
  background: ${(props) => props.background || '#282828'};
`;

export default Rect; 