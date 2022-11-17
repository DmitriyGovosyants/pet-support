import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { device } from "styles/mediaquery";

export const AuthNavList = styled.ul`
  display: flex;

  ${device.tablet} {
    margin-left: auto;
  }
`;

export const AuthNavItem = styled.li`
  :not(:last-child) {
    margin-right: 12px;
  }

  ${device.desktop}  {
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const AuthNavLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 10px 28px;

  color: ${p => p.option === 'main' ? p.theme.colors.textSecond : p.theme.colors.textThird};
  background-color: ${p => p.option === 'main' ? p.theme.colors.accent : p.theme.colors.textSecond};
  border: 2px solid ${p => p.theme.colors.accent};
  border-radius: 40px;

  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
   border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
   color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.hover};
    border-color: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.textSecond};
  }

  &.active {
    color: ${p => p.option === 'main' ? p.theme.colors.textSecond : p.theme.colors.textThird};
    background-color: ${p => p.option  === 'main'? p.theme.colors.accent : p.theme.colors.textSecond};
    border: 2px solid ${p => p.theme.colors.accent};
  }
`;