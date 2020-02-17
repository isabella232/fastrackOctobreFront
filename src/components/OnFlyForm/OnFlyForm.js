import React, { useState } from 'react';
import styled from '@emotion/styled';
import TextareaAutosize from 'react-textarea-autosize';
import PropTypes from 'prop-types';
import VerticalFlex from '../commons/GlobalsStyles/verticalFlex';
import { P } from '../commons/GlobalsStyles/text';
import Form from '../commons/GlobalsStyles/form';

const P2 = styled(P)`
  padding: .5rem;
`;

const OnFlyForm = ({ title }) => {

  return (
    <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem" display="block">{title}</P>
      <Form margin=".8rem 0 .8rem .3rem">
          <P2 contentEditable="true">Cliquez ici pour modifier</P2>
      </Form>
    </VerticalFlex>
  );
};

OnFlyForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default OnFlyForm;
