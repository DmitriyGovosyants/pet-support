import { UserDataItem } from 'components';

const initialState = {
  avatar: '',
  name: 'Bobby',
  email: 'bobby@com',
  birthDay: '00/00/0000',
  phone: '098-123-45-45',
  city: 'Kyiv',
};

export const UserData = () => {
  return (
    <>
      <UserDataItem user={initialState} />
    </>
  );
};
