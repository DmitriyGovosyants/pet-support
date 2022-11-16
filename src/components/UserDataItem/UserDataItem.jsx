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

const BasicUserInfoElement = ({ id, info, onShowForm, isEditBtnDisabled }) => {
  return (
    <>
      <BasicUserDataWrapper>
        <BasicUserDataTitle>{info}</BasicUserDataTitle>
        <BasicUserDataEditButton
          id={id}
          onClick={onShowForm}
          disabled={isEditBtnDisabled}
        >
          <MdEdit />
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
          <BsCheckLg />
        </UserFormSubmitButton>
      </UserForm>
    </>
  );
};

export const UserDataItem = ({
  title,
  value,
  isShowForm,
  onShowForm,
  onSubmit,
  isEditBtnDisabled,
}) => {
  const titleNormalized = title.toLowerCase();

  return (
    <>
      <UserDescriptionItem>
        <ItemTitle> {titleNormalized}:</ItemTitle>

        {isShowForm !== title ? (
          <BasicUserInfoElement
            id={title}
            info={value}
            onShowForm={onShowForm}
            isEditBtnDisabled={isEditBtnDisabled}
          />
        ) : (
          <FormElement info={value} onSubmit={onSubmit} />
        )}
      </UserDescriptionItem>
    </>
  );
};
