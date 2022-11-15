import { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';

import {
  UserDescriptionItem,
  ItemTitle,
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

export const UserDataItem = ({ title, value }) => {
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
      <UserDescriptionItem>
        <ItemTitle> {title}:</ItemTitle>

        {!isEdit ? (
          <BasicUserInfoElement info={value} onClick={handleChange} />
        ) : (
          <FormElement info={value} onSubmit={handleSubmit} />
        )}
      </UserDescriptionItem>
    </>
  );
};
