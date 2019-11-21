import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

import EditButton from '../commons/fixedButton';
import Form from '../Form';

<<<<<<< HEAD
const FormContainer = styled.div`
width: 30%;
top: 0;
height: 150vh;
left: 100%;
position: fixed;
z-index: 10;
background-color: #28ABE2;
transition: left 1s;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
padding: 2rem 0.2rem;

${(props) => props.animate && `
left: 70%;
`}

${(props) => !props.animate && `
left: 100%;
`}

`;

const AddButton = styled(EditButton)`
transition: left 1s;

${(props) => props.animate && `
left: calc(70% - 40px);
background-color: #28ABE2;
`}

${(props) => !props.animate && `
left: calc(100% - 40px);
background-color: #28ABE2;
`}

`;

const FixedButton = () => {
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
    setAnimate(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShow(true);
    setAnimate(false);
  };

  return (
    <>
      <FormContainer animate={animate}>
        {show
          ? (
            <Link to="">
              <AddButton onClick={handleClick} animate={animate}>
                <FontAwesomeIcon icon={faPlus} style={{ color: '#DFE4EA' }} size="1x" />
              </AddButton>
              <Form />
            </Link>
          )
          : (
            <>
              <Link to="">
                <AddButton onClick={handleClose} animate={animate}>
                  <FontAwesomeIcon icon={faMinus} style={{ color: '#DFE4EA' }} size="1x" />
                </AddButton>
              </Link>
              <Form />
            </>
          )}
      </FormContainer>
    </>
  );
};
=======
const FixedButton = () => (
  <Link to="">
    <EditButton>
      <FontAwesomeIcon icon={faPlus} style={{ color: '#28ABE2' }} size="1x" />
    </EditButton>
  </Link>
);
>>>>>>> master

export default FixedButton;
