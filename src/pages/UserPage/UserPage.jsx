import { UserData, Logout, PetsData } from 'components';

const UserPage = () => {
  return (
    <>
      <div>USER PAGE</div>
      <div>
        <UserData />
        <Logout />
      </div>
      <PetsData />
    </>
  );
};

export default UserPage;
