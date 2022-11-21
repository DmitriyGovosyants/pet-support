import { Spinner, UserDataItem } from 'components';
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
import imageNotFound from '../../data/img/no-image.webp';
import { normalizeData } from '../../helpers';
import { ORDER_USER_FIELDS } from '../../constants/constants';
import { useFetchUserQuery } from 'redux/usersApi';

export const UserData = () => {
  const [isShowForm, setIsShowForm] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);

  const { data, isLoading } = useFetchUserQuery();

  if (isLoading) return <Spinner />;

  const fetchData = data?.data?.user;

  const [normalizedData, { avatar }] = normalizeData(
    fetchData,
    ORDER_USER_FIELDS
  );

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
            <Avatar
              src={avatar || imageNotFound}
              alt={avatar || imageNotFound}
            />
            <AvatarPhotoEditButton>
              <HiCamera size={20} color={theme.colors.accent} />
              <span>Edit photo</span>
            </AvatarPhotoEditButton>
          </AvatarWrapper>

          <UserDescriptionWrapper>
            {normalizedData.map(([title, value]) => (
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
