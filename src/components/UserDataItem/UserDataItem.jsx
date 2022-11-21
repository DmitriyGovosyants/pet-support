import { MdEdit } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmail from 'validator/lib/isEmail';
import { validationError } from 'constants/constants';
import {
  ItemContainer,
  UserDescriptionItem,
  ItemTitle,
  BasicUserDataWrapper,
  UserForm,
  UserFormInput,
  UserFormSubmitButton,
  BasicUserDataEditButton,
  BasicUserDataTitle,
  Error,
} from './UserDataItem.styled';
import { useState } from 'react';
import { isCity, isDate, isDatePast, isUserName } from 'helpers';

export const UserDataItem = ({
  title,
  value,
  isShowForm,
  onShowForm,
  onSubmit,
  isEditBtnDisabled,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [errorMsg, setErrorMsg] = useState(null);

  const titleNormalized = title.toLowerCase();

  const handleValidation = (valueKey, newData) => {
    let isValid = false;

    switch (valueKey) {
      case 'name':
        isValid = isUserName(newData);
        break;
      case 'email':
        isValid = isEmail(newData);
        break;
      case 'birthdate':
        isValid = isDatePast(newData) && isDate(newData);
        break;
      case 'phone':
        isValid = isMobilePhone(newData, 'uk-UA', {
          strictMode: true,
        });
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
    setInputValue(value);
  };

  const handleSummit = async e => {
    e.preventDefault();
    const isValid = handleValidation(title, inputValue);

    if (!isValid) {
      setErrorMsg(validationError[title]);
      return;
    }

    setErrorMsg(null);
    await onSubmit({ [title]: inputValue });
  };

  return (
    <ItemContainer>
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
      <Error>{errorMsg}</Error>
    </ItemContainer>
  );
};
