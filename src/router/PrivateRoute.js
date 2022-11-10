import { Navigate, Outlet } from 'react-router-dom';
// import { useUser } from 'context/userContext';

export const PrivateRoute = ({ redirectTo = '/' }) => {
  // const { user } = useUser();
  const user = false;

  return user ? <Outlet /> : <Navigate to={redirectTo} replace />
};