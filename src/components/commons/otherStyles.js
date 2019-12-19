import styled from '@emotion/styled';

// You can use this list to import one or all element below
// eslint-disable-next-line max-len
// { Cursor, Rect, HorizontalFlex, VerticalFlex, Line, Ellipse, BoxHead, BoxGoals, BoxSkills }

export const SkillsSlideContainer = styled.div`
  width: 1000px;
  min-width: 800px;
  margin : 0 auto;

  justify-content: ${(props) => props.justifyContent};
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

export const Rect = styled.div`
  height: 2rem; 
  width : 4rem;
  border-top: ${(props) => props.BorderTop}px solid #2F3640;
  border-right: ${(props) => props.BorderRight}px solid #2F3640;
  border-bottom: ${(props) => props.BorderBottom}px solid #2F3640;
  border-left: ${(props) => props.BorderLeft}px solid #2F3640;
  border-color: ${(props) => props.theme.colors.black};
  opacity: ${(props) => props.opacity};
  background: ${(props) => props.background};
`;

export const Infos = styled.div`

color: ${(props) => props.theme.colors.white};
position: absolute;


`;
