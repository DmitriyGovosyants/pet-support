import { UserData, Logout, PetsData } from 'components';
import { UserDataWrapper, UserDataTitle } from './UserPage.styled';

const UserPage = () => {
  return (
    <>
      <div>USER PAGE</div>
      <UserDataTitle>My information:</UserDataTitle>
      <UserDataWrapper>
        <UserData />
        <Logout />
      </UserDataWrapper>
      <PetsData />
    </>
  );
};

export default UserPage;
