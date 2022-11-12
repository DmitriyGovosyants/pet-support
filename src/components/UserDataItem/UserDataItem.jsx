import { useState } from 'react';
import {
  UserWrapper,
  AvatarWrapper,
  Avatar,
  UserInfoWrapper,
  ItemWrapper,
  Item,
  EditWrapper,
  FormChangeUserInfo,
  InputChangeUserInfo,
} from './UserDataItem.styled';
import React from 'react';

const UserInfoElement = ({ info, onClick }) => {
  return (
    <>
      <EditWrapper>
        {info}
        <button onClick={onClick}>/</button>
      </EditWrapper>
    </>
  );
};

const FormElement = ({ info, onSubmit }) => {
  return (
    <>
      <FormChangeUserInfo onSubmit={onSubmit}>
        <InputChangeUserInfo defaultValue={info} />
        <button>?</button>
      </FormChangeUserInfo>
    </>
  );
};

export const UserDataItem = ({
  user: { avatar, name, email, birthDay, phone, city },
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = () => {
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
          <button>Edit photo</button>
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
