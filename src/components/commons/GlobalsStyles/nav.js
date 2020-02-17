import styled from '@emotion/styled';
import { phoneQuery } from '../../../services/media-queries';

const Navbar = styled.div`
  width: 80px;
  height: 100vh;
  background: #29AAE2;
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
  position: fixed;
  ${phoneQuery`
  position: absolute;
  width: 100%;
  height: 50px;
  flex-direction: row;
  padding: 0 0;
  top: 0;



`};


`;

export default Navbar;
