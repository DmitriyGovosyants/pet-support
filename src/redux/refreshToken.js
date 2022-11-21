import { useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { selectCurrentUser, getIsLoggedIn } from 'redux/authSlice';
import { useGetUserQuery } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';

export const GetCurrentUser = async () => {
  const token = useSelector(selectCurrentUser);
  const isAuthorized = useSelector(getIsLoggedIn);

  try {
    const data = useGetUserQuery('', {
      skip: token === null || isAuthorized === true,
    });
    unwrapResult(data);
  } catch (error) {
    setCredentials({ token: null });
    window.location.reload();
  }
};
