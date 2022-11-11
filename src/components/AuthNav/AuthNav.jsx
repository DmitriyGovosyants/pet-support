import { AuthNavItem, AuthNavList, AuthNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavItem>

          <AuthNavLink to="/login">Login</AuthNavLink>

      </AuthNavItem>
      <AuthNavItem>
          <AuthNavLink to="/register">Registration</AuthNavLink>
      </AuthNavItem>
    </AuthNavList>
  );
};
