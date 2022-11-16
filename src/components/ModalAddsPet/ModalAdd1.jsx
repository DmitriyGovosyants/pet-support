import { useState, useEffect } from 'react';
import { 
  ModalAdd1Wrap, 
  ModalAdd1Title, 
  ModalAdd1Form,
  ModalAdd1Label,
  ModalAdd1Text,
  ModalAdd1Input,
  ModalAdd1TextError,
  ModalAdd1ButtonWrap,
  ModalAdd1ButtonCancel,
  ModalAdd1ButtonNext,
} from './ModalAdd1.styled'

export const ModalAdd1 = ({
  toggleModal,
  setPage,
  createPetsPost,
  modalDefaultValues,
}) => {
  const [inputActiveName, setInputActiveName] = useState(true);
  const [inputActiveBirthday, setInputActiveBirthday] = useState(true);
  const [inputActiveBreed, setInputActiveBreed] = useState(true);
  const [nameValue, setNameValue] = useState(
    modalDefaultValues ? modalDefaultValues.name : ''
  );
  const [birthdayValue, setBirthdayValue] = useState(
    modalDefaultValues ? modalDefaultValues.birthday : ''
  );
  const [breedValue, setBreedValue] = useState(
    modalDefaultValues ? modalDefaultValues.breed : ''
  );
  const [required, setRequired] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    const valueToLower = value.toLowerCase();

    switch (name) {
      case 'name':
        const pattern =
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
        setInputActiveName(pattern.test(valueToLower));

        if (value.length < 2) {
          setInputActiveName(false);
        }

        if (value.length > 16) {
          setInputActiveName(false);
        }

        setNameValue(value);
        break;

      case 'Date_of_birth':
        setInputActiveBirthday(
          /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)$/.test(
            valueToLower
          )
        );

        setBirthdayValue(value);
        break;

      case 'breed':
        setInputActiveBreed(
          /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
            valueToLower
          )
        );

        if (value.length < 2) {
          setInputActiveBreed(false);
        }

        if (value.length > 16) {
          setInputActiveBreed(false);
        }

        setBreedValue(value);
        break;

      default:
        return;
    }
  };

  const onClickCancelBtn = e => {
    e.preventDefault();
    toggleModal();
    setRequired(false);
    setNameValue('');
    setBirthdayValue('');
    setBreedValue('');
  };

  const onClickNextBtn = e => {
    e.preventDefault();

    if (nameValue.length < 2 || nameValue.length > 16) {
      setInputActiveName(false);
      setRequired(true);
      return;
    }

    if (!inputActiveName) {
      return;
    }

    if (birthdayValue.length === 0) {
      setInputActiveBirthday(false);
      setRequired(true);
      return;
    }

    if (!inputActiveBirthday) {
      return;
    }

    if (breedValue.length < 2 || breedValue.length > 16) {
      setInputActiveBreed(false);
      setRequired(true);
      return;
    }

    if (!inputActiveBreed) {
      return;
    }

    const data = {
      name: nameValue,
      birthday: birthdayValue,
      breed: breedValue,
    };

    createPetsPost(data);
    setPage(2);
  };

  useEffect(() => {
    if (!toggleModal) {
      setRequired(false);
      setNameValue('');
      setBirthdayValue('');
      setBreedValue('');
    }
  }, [toggleModal]);

  return (
    <ModalAdd1Wrap>
      <ModalAdd1Title>Add pet</ModalAdd1Title>
      <ModalAdd1Form>
        <ModalAdd1Label>
          <ModalAdd1Text>Name pet</ModalAdd1Text>
          <ModalAdd1Input
            type="text"
            name="name"
            value={nameValue}
            onChange={handleInputChange}
            placeholder="Type name pet"
            required
          />
          {!inputActiveName &&
            nameValue.length !== 0 &&
            nameValue.length < 2 && (
              <ModalAdd1TextError>Must be at least 2 characters</ModalAdd1TextError>
            )}
          {!inputActiveName &&
            nameValue.length !== 0 &&
            nameValue.length > 16 && (
              <ModalAdd1TextError>No more than 16 characters</ModalAdd1TextError>
            )}
          {required && nameValue.length === 0 && (
            <ModalAdd1TextError>Required</ModalAdd1TextError>
          )}
        </ModalAdd1Label>
        <ModalAdd1Label>
          <ModalAdd1Text>Date of birth</ModalAdd1Text>
          <ModalAdd1Input 
            type="text"
            name="Date_of_birth"
            value={birthdayValue}
            onChange={handleInputChange}
            placeholder="Type date of birth"
            required
          />
          {!inputActiveBirthday && birthdayValue.length !== 0 && (
            <ModalAdd1TextError>DD.MM.YYYY</ModalAdd1TextError>
          )}
          {required && birthdayValue.length === 0 && (
            <ModalAdd1TextError>Required</ModalAdd1TextError>
          )}
        </ModalAdd1Label>
        <ModalAdd1Label>
          <ModalAdd1Text>Breed</ModalAdd1Text>
          <ModalAdd1Input 
            type="text"
            name="breed"
            value={breedValue}
            onChange={handleInputChange}
            placeholder="Type breed"
            required
          />
          {!inputActiveBreed &&
            breedValue.length !== 0 &&
            breedValue.length < 2 && (
              <ModalAdd1TextError>Must be at least 2 characters</ModalAdd1TextError>
            )}
          {!inputActiveName &&
            breedValue.length !== 0 &&
            breedValue.length > 16 && (
              <ModalAdd1TextError>No more than 16 characters</ModalAdd1TextError>
            )}
          {required && breedValue.length === 0 && (
            <ModalAdd1TextError>Required</ModalAdd1TextError>
          )}
        </ModalAdd1Label>
        <ModalAdd1ButtonWrap>
          <ModalAdd1ButtonCancel onClick={onClickCancelBtn}>
            Cancel
          </ModalAdd1ButtonCancel>
          <ModalAdd1ButtonNext onClick={onClickNextBtn}>
            Next
          </ModalAdd1ButtonNext>
        </ModalAdd1ButtonWrap>
      </ModalAdd1Form>
    </ModalAdd1Wrap>
  );
}