import { UserData, Logout, PetsData } from 'components';
import { UserPageWrapper, UserDataWrapper } from './UserPage.styled';

const UserPage = () => {
  return (
    <UserPageWrapper>
      <UserDataWrapper>
        <UserData />
        <Logout />
      </UserDataWrapper>
      <PetsData />
    </UserPageWrapper>
  );
};

export default UserPage;
