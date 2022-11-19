import { LogoutButton } from './Logout.styled';
import { TbLogout } from 'react-icons/tb';
import { useLogOutMutation } from 'redux/authApi';
import { clearCredentials } from 'redux/authSlice';
import { useDispatch } from 'react-redux';

export const Logout = () => {
  const dispatch = useDispatch();

  const [logout] = useLogOutMutation();

  const handleLogout = () => {
    logout();
    dispatch(clearCredentials());
  };

  return (
    <>
      <LogoutButton type="button" onClick={handleLogout}>
        <TbLogout size={18} color="F59256" />
        <span>Log Out</span>
      </LogoutButton>
    </>
  );
};
