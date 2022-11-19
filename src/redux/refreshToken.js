import { useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import {selectCurrentUser, getIsLoggedIn} from 'redux/authSlice';
import { useGetUserQuery } from 'redux/authApi';

export const GetCurrentUser = async () => {
  const token = useSelector(selectCurrentUser);
  const isAuthorized = useSelector(getIsLoggedIn);
  
  try {
    const data = useGetUserQuery('', {
      skip: token === null || isAuthorized === true,
    });
    unwrapResult(data);
  } catch (error) {
    if (error.status === 401) {
      localStorage.setItem('persist:auth', null);
      window.location.reload();
    }
    console.log(error);
  }
}