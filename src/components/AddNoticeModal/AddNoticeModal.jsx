import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import { MainButton } from 'components';
import {
  ModalCard,
  FormTitle,
  FormText,
  SelectCategory,
  CategoryLabel,
  CategoryInput,
  InputBox,
  FormInputLabel,
  RequiredSymbol,
  FormInput,
  BtnBox,
  BtnClose,
} from './AddNoticeModal.styled';

export const AddNoticeModal = ({ toggleModal }) => {
  // const [signUp, { isLoading }] = useSignUpMutation();
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState({
    title: {
      value: '',
      isValid: true,
    },
    name: {
      value: '',
      isValid: true,
    },
    birthdate: {
      value: '',
      isValid: true,
    },
    breed: {
      value: '',
      isValid: true,
    },
  });

  const handleChange = ({ target: { name, value, isValid = true } }) =>
    setFormState(prev => ({ ...prev, [name]: { value, isValid } }));

  const handleSubmit = e => {
    console.log('EEE: ', e);
  };
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     const data = dataFormConverter(formState);
  //     await signUp(data).unwrap();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <ModalCard onSubmit={() => handleSubmit()}>
      <FormTitle>Add pet</FormTitle>
      <FormText>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </FormText>
      <SelectCategory>
        <CategoryInput
          id="lost-found"
          type="radio"
          name="category"
          value="lost-found"
        />
        <CategoryLabel htmlFor="lost-found">lost/found</CategoryLabel>
        <CategoryInput
          id="in-good-hands"
          type="radio"
          name="category"
          value="in-good-hands"
        />
        <CategoryLabel htmlFor="in-good-hands">In good hands</CategoryLabel>
        <CategoryInput id="sell" type="radio" name="category" value="sell" />
        <CategoryLabel htmlFor="sell">sell</CategoryLabel>
      </SelectCategory>
      <InputBox>
        <FormInputLabel>
          Tittle of ad<RequiredSymbol>*</RequiredSymbol>
        </FormInputLabel>
        <FormInput
          placeholder={'Title of pet'}
          type={'Title'}
          name={'title'}
          onChange={handleChange}
          isValid={formState.title.isValid}
          errorMessage="Invalid Title"
        />
        {!formState.title.isValid && (
          <div style={{ color: 'red' }}>Invalid Title</div>
        )}
        <FormInputLabel>Name pet</FormInputLabel>
        <FormInput
          placeholder={'Type name pet'}
          type={'Name'}
          name={'name'}
          onChange={handleChange}
          isValid={formState.name.isValid}
          errorMessage="Invalid Name"
        />
        {!formState.name.isValid && (
          <div style={{ color: 'red' }}>Invalid Name</div>
        )}
        <FormInputLabel>Date of birth</FormInputLabel>
        <FormInput
          placeholder={'Type date of birth'}
          type={'Birthdate'}
          name={'birthdate'}
          onChange={handleChange}
          isValid={formState.birthdate.isValid}
          errorMessage="Invalid Birthdate"
        />
        {!formState.birthdate.isValid && (
          <div style={{ color: 'red' }}>Invalid Birthdate</div>
        )}
        <FormInputLabel>Breed</FormInputLabel>
        <FormInput
          placeholder={'Type breed'}
          type={'Breed'}
          name={'breed'}
          onChange={handleChange}
          isValid={formState.breed.isValid}
          errorMessage="Invalid Breed"
        />
        {!formState.breed.isValid && (
          <div style={{ color: 'red' }}>Invalid Breed</div>
        )}
      </InputBox>
      <BtnBox>
        <MainButton size={'medium'} width={'fixed'}>
          Next
        </MainButton>
        <MainButton option={'black'} size={'medium'} width={'fixed'}>
          Cancel
        </MainButton>
      </BtnBox>
      <BtnClose type="button" onClick={() => toggleModal()}>
        <CloseIcon />
      </BtnClose>
    </ModalCard>
  );
};
