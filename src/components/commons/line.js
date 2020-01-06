import styled from '@emotion/styled';

// <Line />
export const Line = styled.div`
margin: 2rem 0;
display: flex; 
justify-content: center;
width: 100%;
height: 5px;
background: ${(props) => props.theme.colors.primary};

`;

export default Line;
