import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { device } from "styles/mediaquery";


export const NavList = styled.ul`
  ${device.tablet} {
    margin-top: 95px;
  }

  ${device.desktop} {
    display: flex;
    margin-top: 5px;
  }
`;
export const NavItem = styled.li`
  text-align: center;

  :not(:last-child) {
    margin-bottom: 40px;
  }

  ${device.desktop}  {
    :not(:last-child) {
      margin-right: 80px;
  }
}
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  width: 100%;

  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.dark};

  &.active {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }

  ${device.tablet}  {
    font-size: 48px;
  }

  ${device.desktop}  {
    font-size: 20px;
    line-height: 1.35;
  }
`;