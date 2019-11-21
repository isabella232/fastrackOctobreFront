import styled from '@emotion/styled';

// You can use this list to import one or all element below
// { PBold, HorizontalFlex, VerticalFlex, Line, Ellipse, Button, BoxHead, BoxGoals, BoxSkills }

// <PBold></PBold>
export const PBold = styled.p`
font-weight: bold;
display: 'inline'
font-weight=${(props) => props.fontWeight};
margin: ${(props) => props.margin};
`;

// <HorizontalFlex></HorizontalFlex>
export const HorizontalFlex = styled.div`
  display: flex;
  justify-content: center; 

  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

// <VerticalFlex></VerticalFlex>
export const VerticalFlex = styled.div`
  display : flex; 
  flex-direction : column;
  justify-content: center; 

  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

// <Line />
export const Line = styled.div`

width: 100%;
height: 5px;
background: #28ABE2;
border-radius: 90px;

margin: ${(props) => props.margin};
display: ${(props) => props.display};
justify-content: ${(props) => props.justifyContent};
`;

// <Ellipse />
export const Ellipse = styled.div`

width: 27px;
height: 27px;
background: #28ABE2;
border-radius: 25px; 
top: 50%;
-ms-transform: translateY(-50%);
transform: translateY(-50%);
`;

// <Button ></Button>
export const Button = styled.button`
background: #28ABE2;
border-radius: 90px;
padding: .5rem 1rem;
margin : 0.5rem;
color : #FFFFFF;
border : none; 
  &:hover {
    opacity : .8; 
  }
  
`;

// <BoxHead></BoxHead>
export const BoxHead = styled.div`
  border-bottom: 1px solid grey; 
  width : 80%;
  text-align: center; 
  padding-bottom: 1rem; 
`;

// <BoxGoals></BoxGoals>
export const BoxGoals = styled.div`
  border-bottom: 1px solid grey; 
  width : 80%;
  text-align: center; 
  padding-bottom: 1rem; 
`;

// <BoxSkills></BoxSkills>
export const BoxSkills = styled.div`
  border-bottom: 1px solid grey; 
  width : 80%;
  text-align: center; 
  padding-bottom: 1rem; 
`;
