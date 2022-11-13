import { useState } from 'react';
import { HiCamera } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import { theme } from 'styles';

import {
  UserWrapper,
  AvatarWrapper,
  Avatar,
  ButtonPhotoEdit,
  UserInfoWrapper,
  ItemWrapper,
  Item,
  EditWrapper,
  FormChangeUserInfo,
  InputChangeUserInfo,
  ToggleButton,
  UserInfoTitle,
} from './UserDataItem.styled';
import React from 'react';

const UserInfoElement = ({ info, onClick }) => {
  return (
    <>
      <EditWrapper>
        <UserInfoTitle>{info}</UserInfoTitle>
        <ToggleButton id={info} onClick={onClick}>
          <MdEdit color="rgba(17, 17, 17, 0.6)" />
        </ToggleButton>
      </EditWrapper>
    </>
  );
};

const FormElement = ({ info, onSubmit }) => {
  return (
    <>
      <FormChangeUserInfo onSubmit={onSubmit}>
        <InputChangeUserInfo defaultValue={info} />
        <ToggleButton id={info}>
          <BsCheckLg color="rgba(17, 17, 17, 0.6)" />
        </ToggleButton>
      </FormChangeUserInfo>
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
          <Avatar src="#" alt={avatar} />
          <ButtonPhotoEdit>
            <HiCamera size={20} color={theme.colors.accent} />
            <span>Edit photo</span>
          </ButtonPhotoEdit>
        </AvatarWrapper>

        <UserInfoWrapper>
          <ItemWrapper>
            <Item>
              Name:
              {!isEdit ? (
                <UserInfoElement info={name} onClick={handleChange} />
              ) : (
                <FormElement info={name} onSubmit={handleSubmit} />
              )}
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item>
              Email:
              {!isEdit ? (
                <UserInfoElement info={email} onClick={handleChange} />
              ) : (
                <FormElement info={email} onSubmit={handleSubmit} />
              )}
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item>
              Birthday:
              {!isEdit ? (
                <UserInfoElement info={birthDay} onClick={handleChange} />
              ) : (
                <FormElement info={birthDay} onSubmit={handleSubmit} />
              )}
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item>
              Phone:
              {!isEdit ? (
                <UserInfoElement info={phone} onClick={handleChange} />
              ) : (
                <FormElement info={phone} onSubmit={handleSubmit} />
              )}
            </Item>
          </ItemWrapper>
          <ItemWrapper>
            <Item>
              City:
              {!isEdit ? (
                <UserInfoElement info={city} onClick={handleChange} />
              ) : (
                <FormElement info={city} onSubmit={handleSubmit} />
              )}
            </Item>
          </ItemWrapper>
        </UserInfoWrapper>
      </UserWrapper>
    </>
  );
};
