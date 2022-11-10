import { NavLink } from 'react-router-dom';
import { routesPath } from 'router';

export const Nav = () => {
  return (
    <>
      <NavLink to={routesPath.news}>News</NavLink>
      <NavLink to={routesPath.notices}>Find pet</NavLink>
      <NavLink to={routesPath.friends}>Our friend</NavLink>
    </>
  );
};
