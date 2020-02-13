import styled from '@emotion/styled';


// Note de Review faire plusieurs balises images au taille préfinit.
const Img = styled.img`
width: ${(props) => props.width || '100%'};
margin-bottom: ${(props) => props.marginBottom || '1em'};
margin: ${(props) => props.margin};

`;

export default Img;
