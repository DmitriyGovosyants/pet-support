import { AuthNavItem, AuthNavList, AuthNavLink } from './AuthNav.styled';
import { routesPath } from 'router'

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavItem>

          <AuthNavLink to={routesPath.login}>Login</AuthNavLink>

      </AuthNavItem>
      <AuthNavItem>
          <AuthNavLink to={routesPath.register}>Registration</AuthNavLink>
      </AuthNavItem>
    </AuthNavList>
  );
};
