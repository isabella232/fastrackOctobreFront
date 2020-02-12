import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { phoneQuery, tabletQuery } from '../../../services/media-queries';

const Link2 = styled(Link)`
  display: flex;
  margin: 0 4%;
  width: 37%;
  min-width: 300px;
  flex-wrap: wrap;
  margin-bottom: 4em;
  ${tabletQuery`
  margin: 4%;

`};
${phoneQuery`
  margin: 4%;

`};

`;

export default Link2;
