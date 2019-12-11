import styled from '@emotion/styled';

// <Button ></Button>
const Button = styled.button`
background: ${(props) => props.theme.colors.primary};
border-radius: 90px;
padding: .5rem 1rem;
margin : 0.5rem;
color : ${(props) => props.theme.colors.white};
border : none; 
  &:hover {
    opacity : .8; 
  }
  
`;

export default Button;
