import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const UserNavLink = styled(NavLink)`
display: inline-flex;
align-items: center;
padding: 10px 28px;
border: ${p => (p.active ? "none" : "2px solid")};
border-radius: 40px;
background-color: ${p => (p.active ? p.theme.colors.accent : p.theme.colors.textSecond)};
color: ${p => (p.active ? p.theme.colors.textSecond : p.theme.colors.accent)};
cursor: pointer;
:hover:not(:disabled),
:focus:not(:disabled) {
  background-color: ${p => (p.active ? p.theme.colors.textSecond : p.theme.colors.accent)};
  border-color: ${p => p.theme.colors.accent};
  color: ${p => (p.active ? p.theme.colors.accent : p.theme.colors.textSecond)};
`;