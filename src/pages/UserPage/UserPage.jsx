import { UserData, Logout, PetsData } from 'components';
import { UserDataWrapper } from './UserPage.styled';

const UserPage = () => {
  return (
    <>
      <div>USER PAGE</div>
      <UserDataWrapper>
        <UserData />
        <Logout />
      </UserDataWrapper>
      <PetsData />
    </>
  );
};

export default UserPage;
