import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { device } from "styles/mediaquery";


export const NavList = styled.ul`
${device.desktop} {
    display: flex;
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
  font-size: 32px;
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: color: ${p => p.theme.colors.dark};
  &.active {
    color: ${p => p.theme.colors.accent};
    border-bottom: 2px solid ${p => p.theme.colors.accent};
  }

  ${device.tablet}  {
    font-size: 48px;
  }

  ${device.desktop}  {
    font-size: 20px;
    line-height: 1.35;
  }
`;