import { LogoutButton } from './Logout.styled';
import { TbLogout } from 'react-icons/tb';

export const Logout = () => {
  return (
    <>
      <LogoutButton>
        <TbLogout size={18} color="F59256" />
        <span>Log Out</span>
      </LogoutButton>
    </>
  );
};
