import styled from '@emotion/styled';

const FormContainer = styled.div`
width: 30%;
top: 0;
height: 150vh;
left: 100%;
position: fixed;
z-index: 10;
background-color: ${(props) => props.theme.colors.primary};
transition: left 1s;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
padding: 2rem 0.2rem;

${(props) => props.animate && `
left: 70%;
`}

${(props) => !props.animate && `
left: 100%;
`}

`;

export default FormContainer;
