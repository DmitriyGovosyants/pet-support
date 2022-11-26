import { TbLogout } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { useLogOutMutation } from 'redux/authApi';
import { usersApi } from 'redux/usersApi';
import { LogoutButton } from './Logout.styled';

export const Logout = () => {
  const [logout] = useLogOutMutation();
  const dispatch = useDispatch();

  return (
    <LogoutButton
      type="button"
      onClick={() => {
        logout();
        dispatch(usersApi.util.resetApiState());
      }}
    >
      <TbLogout size={18} color="F59256" />
      <span>Log Out</span>
    </LogoutButton>
  );
};
