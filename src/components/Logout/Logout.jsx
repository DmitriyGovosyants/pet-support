import { TbLogout } from 'react-icons/tb';
import { useLogOutMutation } from 'redux/authApi';
import { useFetchPetsQuery, useFetchUserQuery } from 'redux/usersApi';
import { LogoutButton } from './Logout.styled';

export const Logout = () => {
  const [logout] = useLogOutMutation();
  const { isSuccess: isUserLoaded } = useFetchUserQuery();
  const { isSuccess: isPetsLoaded } = useFetchPetsQuery();

  if (isUserLoaded && isPetsLoaded) {
    return (
      <LogoutButton type="button" onClick={() => logout()}>
        <TbLogout size={18} color="F59256" />
        <span>Log Out</span>
      </LogoutButton>
    );
  }
};
