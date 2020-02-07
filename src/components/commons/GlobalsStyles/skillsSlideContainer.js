import styled from '@emotion/styled';

const SkillsSlideContainer = styled.div`
  width: 1000px;
  min-width: 800px;
  margin : 0 auto;
  justify-self : center; 

  justify-content: ${(props) => props.justifyContent || 'center'};
`;

export default SkillsSlideContainer;
