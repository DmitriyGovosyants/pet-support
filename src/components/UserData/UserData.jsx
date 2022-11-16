import { UserDataItem } from 'components';
import {
  UserDataTitle,
  UserCardWrapper,
  UserWrapper,
  AvatarWrapper,
  Avatar,
  AvatarPhotoEditButton,
  UserDescriptionWrapper,
} from './UserData.styled';
import { theme } from 'styles';
import { HiCamera } from 'react-icons/hi';
import { useState } from 'react';
import imageURL from '../../data/img/team-img2-tab.jpg';

const initialState = {
  avatar: '',
  name: 'Bobby',
  email: 'bobby@com',
  birthDay: '00/00/0000',
  phone: '098-123-45-45',
  city: 'Kyiv',
};

export const UserData = () => {
  const [isShowForm, setIsShowForm] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);

  const handleShowForm = e => {
    const id = e.currentTarget.id;
    setIsShowForm(id);
    setIsEditBtnDisabled(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsShowForm('');
    setIsEditBtnDisabled(false);
  };

  return (
    <>
      <UserDataTitle>My information:</UserDataTitle>
      <UserCardWrapper>
        <UserWrapper>
          <AvatarWrapper>
            <Avatar src={imageURL} alt={initialState.avatar} />
            <AvatarPhotoEditButton>
              <HiCamera size={20} color={theme.colors.accent} />
              <span>Edit photo</span>
            </AvatarPhotoEditButton>
          </AvatarWrapper>

          <UserDescriptionWrapper>
            {Object.entries(initialState)
              .slice(1)
              .map(([title, value]) => (
                <UserDataItem
                  key={title}
                  title={title}
                  value={value}
                  isShowForm={isShowForm}
                  onShowForm={handleShowForm}
                  onSubmit={handleSubmit}
                  isEditBtnDisabled={isEditBtnDisabled}
                />
              ))}
          </UserDescriptionWrapper>
        </UserWrapper>
      </UserCardWrapper>
    </>
  );
};
