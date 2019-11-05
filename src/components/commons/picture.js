import styled from '@emotion/styled';

const PictureBox = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  border: 4px solid #DFE4EA;
  border-radius: 100px;
  top: -85px;
  left: calc(50% - 85px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("${(props) => props.image}");
`;

export default PictureBox;
