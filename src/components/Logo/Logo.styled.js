import styled from "@emotion/styled";

export const LogoWrap = styled.p`
display: inline;
color: ${p => p.theme.colors.textMain};
font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 42px;
letter-spacing: 0.07em;
user-select: none;
`;

export const LogoAccent = styled.span`
  color: ${p => p.theme.colors.accent};
`;