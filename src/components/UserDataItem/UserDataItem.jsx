import { useState } from 'react';
import { HiCamera } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import { theme } from 'styles';

import {
  UserWrapper,
  AvatarWrapper,
  Avatar,
  AvatarPhotoEditButton,
  UserDescriptionWrapper,
  UserDescriptionItemWrapper,
  UserDescriptionItem,
  BasicUserDataWrapper,
  UserForm,
  UserFormInput,
  UserFormSubmitButton,
  BasicUserDataEditButton,
  BasicUserDataTitle,
} from './UserDataItem.styled';
import React from 'react';

const BasicUserInfoElement = ({ info, onClick }) => {
  return (
    <>
      <BasicUserDataWrapper>
        <BasicUserDataTitle>{info}</BasicUserDataTitle>
        <BasicUserDataEditButton id={info} onClick={onClick}>
          <MdEdit color="rgba(17, 17, 17, 0.6)" />
        </BasicUserDataEditButton>
      </BasicUserDataWrapper>
    </>
  );
};

const FormElement = ({ info, onSubmit }) => {
  return (
    <>
      <UserForm onSubmit={onSubmit}>
        <UserFormInput defaultValue={info} />
        <UserFormSubmitButton id={info}>
          <BsCheckLg color="rgba(17, 17, 17, 0.6)" />
        </UserFormSubmitButton>
      </UserForm>
    </>
  );
};

export const UserDataItem = ({
  user: { avatar, name, email, birthDay, phone, city },
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = e => {
    setIsEdit(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsEdit(false);
  };

  return (
    <>
      <UserWrapper>
        <AvatarWrapper>
          <Avatar alt={avatar} />
          <AvatarPhotoEditButton>
            <HiCamera size={20} color={theme.colors.accent} />
            <span>Edit photo</span>
          </AvatarPhotoEditButton>
        </AvatarWrapper>

        <UserDescriptionWrapper>
          <UserDescriptionItemWrapper>
            <UserDescriptionItem>
              Name:
              {!isEdit ? (
                <BasicUserInfoElement info={name} onClick={handleChange} />
              ) : (
                <FormElement info={name} onSubmit={handleSubmit} />
              )}
            </UserDescriptionItem>
          </UserDescriptionItemWrapper>
          <UserDescriptionItemWrapper>
            <UserDescriptionItem>
              Email:
              {!isEdit ? (
                <BasicUserInfoElement info={email} onClick={handleChange} />
              ) : (
                <FormElement info={email} onSubmit={handleSubmit} />
              )}
            </UserDescriptionItem>
          </UserDescriptionItemWrapper>
          <UserDescriptionItemWrapper>
            <UserDescriptionItem>
              Birthday:
              {!isEdit ? (
                <BasicUserInfoElement info={birthDay} onClick={handleChange} />
              ) : (
                <FormElement info={birthDay} onSubmit={handleSubmit} />
              )}
            </UserDescriptionItem>
          </UserDescriptionItemWrapper>
          <UserDescriptionItemWrapper>
            <UserDescriptionItem>
              Phone:
              {!isEdit ? (
                <BasicUserInfoElement info={phone} onClick={handleChange} />
              ) : (
                <FormElement info={phone} onSubmit={handleSubmit} />
              )}
            </UserDescriptionItem>
          </UserDescriptionItemWrapper>
          <UserDescriptionItemWrapper>
            <UserDescriptionItem>
              City:
              {!isEdit ? (
                <BasicUserInfoElement info={city} onClick={handleChange} />
              ) : (
                <FormElement info={city} onSubmit={handleSubmit} />
              )}
            </UserDescriptionItem>
          </UserDescriptionItemWrapper>
        </UserDescriptionWrapper>
      </UserWrapper>
    </>
  );
};
