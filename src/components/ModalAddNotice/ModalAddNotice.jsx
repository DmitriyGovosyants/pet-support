import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import maleImg from '../../data/img/male.png';
import femaleImg from '../../data/img/female.png';
import { MainButton } from 'components';
import {
  ModalCard,
  FormTitle,
  FormText,
  SelectCategory,
  CategoryLabel,
  CategoryInput,
  InputList,
  InputItem,
  FormInputLabel,
  RequiredSymbol,
  FormInput,
  SelectSex,
  SexInput,
  SexLabel,
  ImgWrapper,
  BtnBox,
  BtnClose,
} from './ModalAddNotice.styled';
import { useAddNoticeMutation } from 'redux/noticesApi';

export const ModalAddNotice = ({ toggleModal }) => {
  const [addNotice] = useAddNoticeMutation();
  const [step, setStep] = useState(1);

  const [formState, setFormState] = useState({
    category: {
      value: '',
      isValid: true,
    },
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
    sex: {
      value: '',
      isValid: true,
    },
    location: {
      value: '',
      isValid: true,
    },
    price: {
      value: '',
      isValid: true,
    },
    comments: {
      value: '',
      isValid: true,
    },
  });

  const handleFirstBtn = () => {
    if (step === 1) {
      setStep(2);
    }
    if (step === 2) {
      handleSubmit();
    }
  };

  const handleSecondBtn = () => {
    if (step === 1) {
      toggleModal();
    }
    if (step === 2) {
      setStep(1);
    }
  };

  const handleChange = ({ target: { name, value, isValid = true } }) =>
    setFormState(prev => ({ ...prev, [name]: { value, isValid } }));

  const handleSubmit = async () => {
    const noticeData = Object.entries(formState).reduce((acc, itm) => {
      acc[itm[0]] = itm[1].value;
      return acc;
    }, {});
    console.log(noticeData);

    try {
      await addNotice(noticeData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalCard onSubmit={() => handleSubmit()}>
      <FormTitle>Add pet</FormTitle>
      <div style={{ display: step === 1 ? 'block' : 'none' }}>
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
            isValid={formState.category.isValid}
            onChange={handleChange}
            required
          />
          <CategoryLabel htmlFor="lost-found">lost/found</CategoryLabel>
          <CategoryInput
            id="in-good-hands"
            type="radio"
            name="category"
            value="in-good-hands"
            isValid={formState.category.isValid}
            onChange={handleChange}
          />
          <CategoryLabel htmlFor="in-good-hands">In good hands</CategoryLabel>
          <CategoryInput
            id="sell"
            type="radio"
            name="category"
            value="sell"
            isValid={formState.category.isValid}
            onChange={handleChange}
          />
          <CategoryLabel htmlFor="sell">sell</CategoryLabel>
        </SelectCategory>
        <InputList>
          <InputItem>
            <FormInputLabel>
              Tittle of ad<RequiredSymbol>*</RequiredSymbol>
            </FormInputLabel>
            <FormInput
              placeholder={'Type title'}
              type={'Title'}
              name={'title'}
              onChange={handleChange}
              isValid={formState.title.isValid}
              errorMessage="Invalid Title"
            />
            {!formState.title.isValid && (
              <div style={{ color: 'red' }}>Invalid Title</div>
            )}
          </InputItem>
          <InputItem>
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
          </InputItem>
          <InputItem>
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
          </InputItem>
          <InputItem>
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
          </InputItem>
        </InputList>
      </div>
      <div style={{ display: step === 2 ? 'block' : 'none' }}>
        <FormInputLabel indent={'big'}>
          The sex<RequiredSymbol>*</RequiredSymbol>
        </FormInputLabel>
        <SelectSex>
          <SexInput
            id="male"
            type="radio"
            name="sex"
            value="male"
            isValid={formState.sex.isValid}
            onChange={handleChange}
          />
          <SexLabel htmlFor="male">
            <ImgWrapper>
              <img src={maleImg} alt="male sex" />
            </ImgWrapper>
            Male
          </SexLabel>
          <SexInput
            id="female"
            type="radio"
            name="sex"
            value="female"
            isValid={formState.sex.isValid}
            onChange={handleChange}
          />
          <SexLabel htmlFor="female">
            <ImgWrapper>
              <img src={femaleImg} alt="female sex" />
            </ImgWrapper>
            Female
          </SexLabel>
        </SelectSex>
        <InputList>
          <InputItem>
            <FormInputLabel>
              Location<RequiredSymbol>*</RequiredSymbol>
            </FormInputLabel>
            <FormInput
              placeholder={'Type location'}
              type={'Location'}
              name={'location'}
              onChange={handleChange}
              isValid={formState.location.isValid}
              errorMessage="Invalid Location"
            />
            {!formState.location.isValid && (
              <div style={{ color: 'red' }}>Invalid Location</div>
            )}
          </InputItem>
          <InputItem>
            <FormInputLabel>
              Price<RequiredSymbol>*</RequiredSymbol>
            </FormInputLabel>
            <FormInput
              placeholder={'Type price'}
              type={'Price'}
              name={'price'}
              onChange={handleChange}
              isValid={formState.price.isValid}
              errorMessage="Invalid Price"
            />
            {!formState.price.isValid && (
              <div style={{ color: 'red' }}>Invalid Price</div>
            )}
          </InputItem>
          <InputItem>
            <FormInputLabel>Load the pet’s image</FormInputLabel>
            {/* <FormInput
              placeholder={'Type location'}
              type={'Location'}
              name={'location'}
              onChange={handleChange}
              isValid={formState.location.isValid}
              errorMessage="Invalid Location"
            /> */}
            {/* {!formState.location.isValid && (
              <div style={{ color: 'red' }}>Invalid Location</div>
            )} */}
          </InputItem>
          <InputItem>
            <FormInputLabel>
              Comments<RequiredSymbol>*</RequiredSymbol>
            </FormInputLabel>
            <FormInput
              placeholder={'Type comments'}
              type={'Comments'}
              name={'comments'}
              onChange={handleChange}
              isValid={formState.comments.isValid}
              errorMessage="Invalid Comments"
            />
            {!formState.comments.isValid && (
              <div style={{ color: 'red' }}>Invalid Comments</div>
            )}
          </InputItem>
        </InputList>
      </div>
      <BtnBox>
        <MainButton
          // type={step === 1 ? 'button' : 'submit'}
          size={'medium'}
          width={'fixed'}
          onClick={() => handleFirstBtn()}
        >
          {step === 1 ? 'Next' : 'Done'}
        </MainButton>
        <MainButton
          option={'black'}
          size={'medium'}
          width={'fixed'}
          onClick={() => handleSecondBtn()}
        >
          {step === 1 ? 'Cancel' : 'Back'}
        </MainButton>
      </BtnBox>
      <BtnClose type="button" onClick={() => toggleModal()}>
        <CloseIcon />
      </BtnClose>
    </ModalCard>
  );
};
