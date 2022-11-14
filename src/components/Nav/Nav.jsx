import { NavLinkStyled, NavItem, NavList } from "./Nav.styled";
import { routesPath } from 'router'

export const Nav = ({toggleNavBar}) => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLinkStyled to={routesPath.news} onClick={toggleNavBar}>News</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to={routesPath.notices} onClick={toggleNavBar}>Find pet</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to={routesPath.friends} onClick={toggleNavBar}>Our friend</NavLinkStyled>
        </NavItem>
      </NavList>
    </nav>
  );
};