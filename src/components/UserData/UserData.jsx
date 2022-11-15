import { UserDataItem } from 'components';
import {
  UserWrapper,
  AvatarWrapper,
  Avatar,
  AvatarPhotoEditButton,
  UserDescriptionWrapper,
} from './UserData.styled';
import { theme } from 'styles';
import { HiCamera } from 'react-icons/hi';

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
      <UserWrapper>
        <AvatarWrapper>
          <Avatar alt={initialState.avatar} />
          <AvatarPhotoEditButton>
            <HiCamera size={20} color={theme.colors.accent} />
            <span>Edit photo</span>
          </AvatarPhotoEditButton>
        </AvatarWrapper>

        <UserDescriptionWrapper>
          <UserDataItem title="name" value={initialState.name} />
          <UserDataItem title="email" value={initialState.email} />
          <UserDataItem title="birthDay" value={initialState.birthDay} />
          <UserDataItem title="phone" value={initialState.phone} />
          <UserDataItem title="city" value={initialState.city} />
        </UserDescriptionWrapper>
      </UserWrapper>
    </>
  );
};
