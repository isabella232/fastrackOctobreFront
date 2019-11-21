import styled from '@emotion/styled';

import EditButton from './fixedButton';

const TopButton = styled(EditButton)`
  top: calc(100% - 60px);
  left: calc(50% + 40px - 20px);
  border-radius: 100px;
`;

export default TopButton;
