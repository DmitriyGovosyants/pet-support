import { NavLinkStyled, NavItem, NavList } from './Nav.styled';
import { routesPath } from 'router';

export const Nav = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLinkStyled to={routesPath.news}>News</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to={routesPath.notices}>Find pet</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to={routesPath.friends}>Our friend</NavLinkStyled>
        </NavItem>
      </NavList>
    </nav>
  );
};
