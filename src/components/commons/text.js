import styled from '@emotion/styled';

// You can use this list to import one or all element below
// { H3, P, SpanBold }

export const H3 = styled.h3`
font-size: 1.4em;
padding: 1rem;

fontSize: ${(props) => props.fontSize};
`;

export const P = styled.p`
font-size: 1rem;

font-weight: ${(props) => props.fontWeight};
margin: ${(props) => props.margin};

`;

export const SpanBold = styled.span`
font-weight: bold;
text-transform: uppercase;
`;

export const WhiteP = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
