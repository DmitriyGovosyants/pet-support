import { Navigate, Outlet } from 'react-router-dom';
// import { useUser } from 'context/userContext';

export const PublicRoute = ({ restricted, redirectTo = '/' }) => {
  // const { user } = useUser();
  const user = false; //временная заглушка
  const shouldRedirect = user && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : <Outlet />;
};
