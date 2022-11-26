import { TbLogout } from 'react-icons/tb';
import { useLogOutMutation } from 'redux/authApi';
import { LogoutButton } from './Logout.styled';

export const Logout = () => {
  const [logout] = useLogOutMutation();

  return (
    <LogoutButton type="button" onClick={() => logout()}>
      <TbLogout size={18} color="F59256" />
      <span>Log Out</span>
    </LogoutButton>
  );
};
