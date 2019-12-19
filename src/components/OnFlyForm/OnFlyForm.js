import React from 'react';
import { VerticalFlex, HorizontalFlex } from '../commons/otherStyles';
import { P } from '../commons/text';
import Form from '../commons/form';
import Input from '../commons/input'; 

const OnFlyForm = () => {

  return (
    <HorizontalFlex justifyContent="space-between" alignItems="baseline" width="100%">
      <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
        <P fontWeight="bold" margin=".8rem 0 .8rem .3rem" display="block">Court Terme </P>
        <Form margin=".8rem 0 .8rem .3rem">
        <Input type="text" value="Lorem Ipsum"/>
        </Form>
      </VerticalFlex>
      <VerticalFlex margin=".8rem 2rem .8rem .3rem" width="calc(100%/3)">
        <P fontWeight="bold" margin=".8rem 0 .8rem .3rem">Moyen Terme</P>
        <Form margin=".8rem 0 .8rem .3rem">
        <Input type="text" value="Lorem Ipsum"/>
        </Form>
      </VerticalFlex>
      <VerticalFlex width="calc(100%/3)">
        <P fontWeight="bold" margin=".8rem 0 .8rem .3rem">Long Terme</P>
        <Form margin=".8rem 0 .8rem .3rem">
        <Input type="text" value="Lorem Ipsum"/>
        </Form>
      </VerticalFlex>
    </HorizontalFlex>

  )
}

export default OnFlyForm;