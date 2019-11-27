import styled from '@emotion/styled';

// You can use this list to import one or all element below
// eslint-disable-next-line max-len
// { Cursor, Rect, HorizontalFlex, VerticalFlex, Line, Ellipse, Button, BoxHead, BoxGoals, BoxSkills }

export const SkillsSlideContainer = styled.div`
  width: 1000px;
  min-width: 800px
`;

// <HorizontalFlex></HorizontalFlex>
export const HorizontalFlex = styled.div`
  display: flex;
  justify-content: center; 

  margin: ${(props) => props.margin};
  margin-right: ${(props) => props.marginR};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  position: ${(props) => props.position};
  width: ${(props) => props.width};
`;

// <VerticalFlex></VerticalFlex>
export const VerticalFlex = styled.div`
  display : flex; 
  flex-direction : column;

  position: ${(props) => props.position};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  width: ${(props) => props.width};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
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

// <Rect/>
// Colors : #C7ECEE (lightBlue) / #7ED6DF (LightBlue2) / #22A6B3 (Blue) / #3C6382 (DarkBlue)
export const Rect = styled.div`
  height: 2rem; 
  width : 4rem;
  border-top: ${(props) => props.BorderTop}px solid #2F3640;
  border-right: ${(props) => props.BorderRight}px solid #2F3640;
  border-bottom: ${(props) => props.BorderBottom}px solid #2F3640;
  border-left: ${(props) => props.BorderLeft}px solid #2F3640;
  border-color: #2F3640;
 
  background: ${(props) => props.background};
`;

// export const Cursor = styled.div `
//   width: 0;
//   height: 0;
//   border-style: solid;
//   border-width: 0 .5rem 1rem .5rem;
//   top: 2rem;
//   left: 0;
//   border-color: transparent transparent #28ABE2 transparent;
//   position : absolute
// `;

