import { useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { selectCurrentUser, getIsLoggedIn } from 'redux/authSlice';
import { useGetUserQuery } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const GetCurrentUser = async () => {
  const token = useSelector(selectCurrentUser);
  const isAuthorized = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const { data, isError } = useGetUserQuery('', {
    skip: token === null || isAuthorized === true,
  });
  useEffect(() => {
    console.log(data);
    // unwrapResult(data);
    if (isError) {
      console.log('IT WORKS?');
      dispatch(setCredentials({ token: null }));
      window.location.reload();
    }
  }, [data, dispatch, isError]);
};
