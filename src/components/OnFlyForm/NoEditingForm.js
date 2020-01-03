import React from 'react';
import HorizontalFlex from '../commons/horizontalFlex';
import VerticalFlex from '../commons/verticalFlex';
import { P } from '../commons/text';
import Form from '../commons/form';

const NoEditingForm = () => {

  return (
    <HorizontalFlex justifyContent="space-between" alignItems="baseline" width="100%">
    <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem" display="block">Court Terme </P>
      <Form margin=".8rem 0 .8rem .3rem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet felis at massa varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Cras semper pellentesque ipsum.   </Form>
    </VerticalFlex>
    <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem">Moyen Terme</P>
      <Form margin=".8rem 0 .8rem .3rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at semper sapien. Donec sit amet felis at massa varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Nulla facilisi. Cras semper pellentesque ipsum. </Form>
    </VerticalFlex>
    <VerticalFlex width="calc(100%/3)">
      <P fontWeight="bold" margin=".8rem 0 .8rem .3rem">Long Terme</P>
      <Form margin=".8rem 0 .8rem .3rem">Lorem ipsum dolor sit amet. Phasellus at semper sapien. Varius fringilla. Morbi id est viverra, auctor dui nec, lobortis leo. Maecenas eu fermentum sem, quis rhoncus elit. Proin imperdiet elementum elit, sit amet laoreet metus ornare ac. Pellentesque aliquam at augue quis mattis. Integer porttitor sagittis mauris, id eleifend nisi euismod non. Nulla facilisi. Cras semper pellentesque ipsum. </Form>
    </VerticalFlex>
  </HorizontalFlex>

  )
}

export default NoEditingForm;