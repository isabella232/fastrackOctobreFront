import styled from '@emotion/styled';

// You can use this list to import one or all element below
// eslint-disable-next-line max-len
// { SkillsSlideContainer, Rect, HorizontalFlex, VerticalFlex, Line, Ellipse, BoxHead, BoxGoals, BoxSkills, Infos }

export const SkillsSlideContainer = styled.div`
  width: 1000px;
  min-width: 800px;
  margin : 0 auto;
  justify-self : center; 

  justify-content: ${(props) => props.justifyContent || 'center'};
`;

// <HorizontalFlex></HorizontalFlex>
export const HorizontalFlex = styled.div`
  display: flex;
  justify-content: center; 

  margin: ${(props) => props.margin || '0px'};
  margin-right: ${(props) => props.marginR || '0px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  align-items: ${(props) => props.alignItems || 'center'};
  position: ${(props) => props.position || 'relative'};
  width: ${(props) => props.width || '0px'};
`;

// <VerticalFlex></VerticalFlex>
export const VerticalFlex = styled.div`
  display : flex; 
  flex-direction : column;

  position: ${(props) => props.position || 'relative'};
  margin: ${(props) => props.margin || '0px'};
  margin-top: ${(props) => props.marginTop || '0px'};
  width: ${(props) => props.width || '0px'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};
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
  border-top: ${(props) => props.BorderTop || '0'}px solid #2F3640;
  border-right: ${(props) => props.BorderRight || '0'}px solid #2F3640;
  border-bottom: ${(props) => props.BorderBottom || '0'}px solid #2F3640;
  border-left: ${(props) => props.BorderLeft || '0'}px solid #2F3640;
  border-color: ${(props) => props.theme.colors.black || '#FFF'};
  opacity: ${(props) => props.opacity || '1'};
  background: ${(props) => props.background || '#282828'};
`;

export const Infos = styled.div`

color: ${(props) => props.theme.colors.white};
position: absolute;


`;
