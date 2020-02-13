import styled from '@emotion/styled';
import { phoneQuery } from '../../../services/media-queries';

// You can use this list to import one or all element below
// { H3, P, SpanBold }

export const H3 = styled.h3`
font-size: 1.4em;
padding: 1rem;
font-size: ${(props) => props.fontSize};
`;

export const P = styled.p`
margin-top: 1em;
font-size: 1rem;
width: ${(props) => props.width};
font-weight: ${(props) => props.fontWeight};
margin: ${(props) => props.margin};
padding: ${(props) => props.padding};
${phoneQuery`
  font-size: 4vmin;
`};

`;

export const SpanBold = styled.span`
font-weight: bold;
text-transform: uppercase;
`;

export const WhiteP = styled.p`
  color: ${(props) => props.theme.colors.accentExtraLight};
  font-weight: 300;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
