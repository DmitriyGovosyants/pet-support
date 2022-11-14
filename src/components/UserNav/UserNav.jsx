import { UserNavLink } from './UserNav.styled';
import { routesPath } from 'router';

export const UserNav = ({toggleNavBar}) => {
  return <UserNavLink to={routesPath.user} onClick={toggleNavBar}>Account</UserNavLink>
};
