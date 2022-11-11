import { NavLinkStyled, NavItem, NavList } from "./Nav.styled";

export const Nav = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/news">News</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/notices">Find pet</NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/friends">Our friend</NavLinkStyled>
        </NavItem>
      </NavList>
    </nav>
  );
};