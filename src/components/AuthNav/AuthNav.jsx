import { AuthNavItem, AuthNavList, AuthNavLink } from './AuthNav.styled';
import { routesPath } from 'router'

export const AuthNav = ({toggleNavBar}) => {
  return (
    <AuthNavList>
      <AuthNavItem>
          <AuthNavLink to={routesPath.login} onClick={toggleNavBar}>Login</AuthNavLink>
      </AuthNavItem>
      <AuthNavItem>
          <AuthNavLink to={routesPath.register} onClick={toggleNavBar}>Registration</AuthNavLink>
      </AuthNavItem>
    </AuthNavList>
  );
};
