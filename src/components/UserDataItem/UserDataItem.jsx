import { MdEdit } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
// import { ThreeDots } from 'react-loader-spinner';

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
import { useState } from 'react';

export const UserDataItem = ({
  title,
  value,
  isShowForm,
  onShowForm,
  isEditLoading,
  onSubmit,
  isEditBtnDisabled,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const titleNormalized = title.toLowerCase();

  const handleInputChange = e => {
    const { value } = e.target;
    setInputValue(value);
  };
  const handleSummit = async e => {
    e.preventDefault();

    await onSubmit({ [title]: inputValue });
  };

  return (
    <>
      <UserDescriptionItem>
        <ItemTitle> {titleNormalized}:</ItemTitle>

        {isShowForm !== title ? (
          <BasicUserDataWrapper>
            <BasicUserDataTitle>{inputValue}</BasicUserDataTitle>

            <BasicUserDataEditButton
              id={title}
              onClick={onShowForm}
              disabled={isEditBtnDisabled}
            >
              <MdEdit />
            </BasicUserDataEditButton>
          </BasicUserDataWrapper>
        ) : (
          <UserForm onSubmit={handleSummit}>
            <label htmlFor="">
              <UserFormInput
                type="text"
                name={title}
                value={inputValue}
                onChange={handleInputChange}
              />
            </label>
            <UserFormSubmitButton id={title} type={'submit'}>
              <BsCheckLg />
            </UserFormSubmitButton>
          </UserForm>
        )}
      </UserDescriptionItem>
    </>
  );
};
