import styled from '@emotion/styled';
import { phoneQuery, tabletQuery } from '../../../services/media-queries';

const Container = styled.div`
  display: flex;
  width: calc(100% - 80px);
  min-height: 95vh;
  margin-left: 80px;
  padding: 3rem;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
      ${tabletQuery`
      margin-top : 15%;
    `};
    ${phoneQuery`
        margin-top : 2em;
        width: 100%;
        margin-left: 0;
        margin-top : 100px;
    `};

`;

export default Container;
