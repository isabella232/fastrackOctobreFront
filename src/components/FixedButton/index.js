import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

import EditButton from '../commons/fixedButton';
import Form from '../Form';
import FormContainer from '../commons/formContainer';

const AddButton = styled(EditButton)`
transition: left 1s;

${(props) => props.animate && `
left: calc(70% - 40px);
background-color: ${props.theme.colors.primary};
`}

${(props) => !props.animate && `
left: calc(100% - 40px);
background-color: ${props.theme.colors.primary};
`}
`;

const FixedButton = (props) => {
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

  const theme = useTheme();

  return (
    <>
      <FormContainer animate={animate}>
        {show
          ? (
            <Link to="">
              <AddButton onClick={handleClick} animate={animate}>
                <FontAwesomeIcon icon={faPlus} style={{ color: theme.colors.white }} size="1x" />
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
              <Form status={handleClose} />
            </>
          )}
      </FormContainer>
    </>
  );
};

export default FixedButton;
