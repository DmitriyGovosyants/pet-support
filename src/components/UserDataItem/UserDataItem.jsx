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
import { isCity, isUserName } from 'helpers';
import { toast } from 'react-toastify';

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

  const handleValidation = (valueKey, newData) => {
    console.log(valueKey, newData);
    let isValid = false;

    switch (valueKey) {
      case 'name':
        isValid = isUserName(newData);
        break;
      case 'email':
        // code block
        break;
      case 'birthdate':
        // code block
        break;
      case 'phone':
        // code block
        break;
      case 'city':
        isValid = isCity(newData);
        break;
      default:
        return;
    }

    return isValid;
  };

  const handleInputChange = e => {
    const { value } = e.target;
    const isValid = handleValidation(title, value);

    if (!isValid) {
      toast.error('Error');
      return;
    }

    // setInputValue(value);
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
