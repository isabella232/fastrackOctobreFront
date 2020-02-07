import React, { useState } from 'react';
import styled from '@emotion/styled';
import TextareaAutosize from 'react-textarea-autosize';
import PropTypes from 'prop-types';
import VerticalFlex from '../commons/GlobalsStyles/verticalFlex';
import { P } from '../commons/GlobalsStyles/text';
import Form from '../commons/GlobalsStyles/form';

const TextArea = styled(TextareaAutosize)`
  background: none;
  border: ${(props) => props.border} ;
  resize: none;
  color: ${(props) => props.theme.colors.black};
  width: 100%;
  height: auto;
  text-align: center;
`;

const OnFlyForm = ({ title }) => {
  const [active, setActive] = useState(true);

  const handleDoubleClick = () => {
    setActive(!active);
  };

  const handleClose = () => {
    setActive(true);
  };

  const placeholder = 'Double-Cliquez pour entrer du texte';

  return (
    <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem" display="block">{title}</P>
      <Form margin=".8rem 0 .8rem .3rem">
        <div onDoubleClick={handleDoubleClick} onMouseLeave={handleClose}>
          <TextArea disabled={active} placeholder={placeholder} border={active ? 'none' : '1px solid rgb(0, 0, 0, 0.5)'} />
        </div>
      </Form>
    </VerticalFlex>
  );
};

OnFlyForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OnFlyForm;
