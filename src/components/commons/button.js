import styled from '@emotion/styled';

// <Button ></Button>
const Button = styled.button`
background: ${(props) => props.theme.colors.primary};
border-radius: 90px;
padding: .5rem 1rem;
margin : 0.5rem;
color : ${(props) => props.theme.colors.white};
transition: transform .03s cubic-bezier(0.47, 0, 0.745, 0.715);
border : none; 
  &:hover {
    transform: scale(1.05);
  }
  
`;

export default Button;
