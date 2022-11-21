import { Spinner, UserDataItem } from 'components';
import {
  UserDataTitle,
  UserCardWrapper,
  UserWrapper,
  AvatarPhotoWrapper,
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
import { useFetchUserQuery, useUpdateUserMutation } from 'redux/usersApi';

export const UserData = () => {
  const [isShowForm, setIsShowForm] = useState('');
  const [isEditBtnDisabled, setIsEditBtnDisabled] = useState(false);
  const { data, isLoading, refetch } = useFetchUserQuery();
  const [editContact, { isLoading: isEditLoading }] = useUpdateUserMutation();

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

  const handleSubmit = newValue => {
    editContact(newValue);
    refetch();

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
            <AvatarPhotoWrapper>
              <AvatarPhotoEditButton>
                <HiCamera size={20} color={theme.colors.accent} />
                <span>Edit photo</span>
              </AvatarPhotoEditButton>
            </AvatarPhotoWrapper>
          </AvatarWrapper>

          <UserDescriptionWrapper>
            {normalizedData.map(([title, fieldValue]) => (
              <UserDataItem
                key={title}
                title={title}
                value={fieldValue}
                isShowForm={isShowForm}
                onShowForm={handleShowForm}
                onSubmit={handleSubmit}
                isEditLoading={isEditLoading}
                isEditBtnDisabled={isEditBtnDisabled}
              />
            ))}
          </UserDescriptionWrapper>
        </UserWrapper>
      </UserCardWrapper>
    </>
  );
};
