import styled from '@emotion/styled';


// Note de Review faire plusieurs balises images au taille préfinit.
const Img = styled.img`

height: ${(props) => props.height || '35%'};
width: ${(props) => props.width || '35%'};
margin-bottom: ${(props) => props.marginBottom || '1rem'};
margin: ${(props) => props.margin};

`;

export default Img;
