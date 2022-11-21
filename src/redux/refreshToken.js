import { useSelector } from 'react-redux';
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
    if (isError) {
      dispatch(setCredentials({ token: null }));
      window.location.reload();
    }
  }, [data, dispatch, isError]);
};
