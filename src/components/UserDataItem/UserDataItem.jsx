import { MdEdit } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { validationErrMsg } from 'constants/constants';
import {
  ItemWrapper,
  UserDescription,
  ItemTitle,
  ItemInfo,
  UserForm,
  UserInput,
  UserSubmitBtn,
  InfoEditBtn,
  Info,
  Error,
} from './UserDataItem.styled';
import { useState } from 'react';
import {
  isCity,
  isDate,
  isDatePast,
  isDomenName,
  isEmail,
  isUserName,
} from 'helpers';

export const UserDataItem = ({
  title,
  value,
  isShowForm,
  onShowForm,
  onSubmit,
  isEditBtnDisabled,
  allUserData,
  setIsShowForm,
  setIsEditBtnDisabled,
}) => {
  const [inputValue, setInputValue] = useState(
    value === '00.00.0000' ? '' : value
  );
  const [errorMsg, setErrorMsg] = useState(null);

  const titleNormalized = title.toLowerCase();

  const handleValidation = (valueKey, newData) => {
    let isValid = false;

    switch (valueKey) {
      case 'name':
        isValid = isUserName(newData);
        break;
      case 'email':
        isValid = isEmail(newData) && isDomenName(newData);
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

    const oldData = allUserData[title];

    if (oldData === inputValue) {
      setIsShowForm('');
      setIsEditBtnDisabled(false);
      return;
    }

    const isValid = handleValidation(title, inputValue);

    if (!isValid) {
      if (title === 'birthdate' && inputValue === '') {
        return;
      }
      setErrorMsg(validationErrMsg[title]);
      return;
    }

    setErrorMsg(null);
    await onSubmit({ [title]: inputValue });
  };

  return (
    <UserDescription>
      <ItemWrapper>
        <ItemTitle> {titleNormalized}:</ItemTitle>

        {isShowForm !== title ? (
          <ItemInfo>
            <Info>{inputValue}</Info>

            <InfoEditBtn
              id={title}
              onClick={onShowForm}
              disabled={isEditBtnDisabled}
            >
              <MdEdit />
            </InfoEditBtn>
          </ItemInfo>
        ) : (
          <UserForm onSubmit={handleSummit}>
            <UserInput
              type="text"
              name={title}
              value={inputValue}
              onChange={handleInputChange}
            />
            <UserSubmitBtn id={title} type={'submit'}>
              <BsCheckLg />
            </UserSubmitBtn>
          </UserForm>
        )}
      </ItemWrapper>
      <Error>{errorMsg}</Error>
    </UserDescription>
  );
};
