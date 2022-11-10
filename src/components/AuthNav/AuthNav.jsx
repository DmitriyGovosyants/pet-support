import { NavLink } from 'react-router-dom';
import { routesPath } from 'router';

export const AuthNav = () => {
  return (
    <>
      <NavLink to={routesPath.login}>Login</NavLink>
      <NavLink to={routesPath.register}>Registration</NavLink>
    </>
  );
};
