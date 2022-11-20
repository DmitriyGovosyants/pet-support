import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import maleImg from '../../data/img/male.png';
import femaleImg from '../../data/img/female.png';
import { isBreed, isCity, isComments, isName, isPrice, isTitle } from 'helpers';
import isDate from 'validator/lib/isDate';
import isEmpty from 'validator/lib/isEmpty';
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
import { toast } from 'react-toastify';

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
  console.log(formState);

  const handleFirstBtn = () => {
    if (step === 1) {
      validateFirstPage();
    }
    if (step === 2) {
      validateSecondPage();
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

  const validateFirstPage = () => {
    const { category, title, name, birthdate, breed } = formState;
    const isCategoryValid = !isEmpty(category.value);
    const isTitleValid = isTitle(title.value);
    const isNameValid = isName(name.value) || isEmpty(name.value);
    const isDateValid =
      isDate(birthdate.value, { format: 'DD-MM-YYYY' }) ||
      isEmpty(birthdate.value);
    const isBreedValid = isBreed(breed.value) || isEmpty(breed.value);

    if (
      !isCategoryValid ||
      !isTitleValid ||
      !isNameValid ||
      !isDateValid ||
      !isBreedValid
    ) {
      setFormState(prevState => ({
        ...prevState,
        category: {
          value: category.value,
          isValid: isCategoryValid,
        },
        title: {
          value: title.value,
          isValid: isTitleValid,
        },
        name: {
          value: name.value,
          isValid: isNameValid,
        },
        birthdate: {
          value: birthdate.value,
          isValid: isDateValid,
        },
        breed: {
          value: breed.value,
          isValid: isBreedValid,
        },
      }));
      return;
    }

    setStep(2);
  };

  const validateSecondPage = () => {
    const { sex, location, price, comments } = formState;
    const isSexValid = !isEmpty(sex.value);
    const isLocationValid = isCity(location.value);
    const isPriceValid = isPrice(price.value);
    const isCommentsValid = isComments(comments.value);

    if (!isSexValid || !isLocationValid || !isPriceValid || !isCommentsValid) {
      setFormState(prevState => ({
        ...prevState,
        sex: {
          value: sex.value,
          isValid: isSexValid,
        },
        location: {
          value: location.value,
          isValid: isLocationValid,
        },
        price: {
          value: price.value,
          isValid: isPriceValid,
        },
        comments: {
          value: comments.value,
          isValid: isCommentsValid,
        },
      }));
      return;
    }

    handleSubmit();
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
      toggleModal();
      toast.success('Your notice is added');
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
          {!formState.category.isValid && (
            <div style={{ color: 'red' }}>Choose Category</div>
          )}
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
            />
            {!formState.title.isValid && (
              <div style={{ color: 'red' }}>
                Title should have only 2-48 letters
              </div>
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
            />
            {!formState.name.isValid && (
              <div style={{ color: 'red' }}>
                Name should have only 2-16 letters
              </div>
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
            />
            {!formState.birthdate.isValid && (
              <div style={{ color: 'red' }}>
                Please, type in DD-MM-YYYY format
              </div>
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
            />
            {!formState.breed.isValid && (
              <div style={{ color: 'red' }}>
                Breed should have only 2-24 letters
              </div>
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
          {!formState.sex.isValid && (
            <div style={{ color: 'red' }}>Choose Sex</div>
          )}
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
            />
            {!formState.location.isValid && (
              <div style={{ color: 'red' }}>
                You should type in City, Region
              </div>
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
            />
            {!formState.price.isValid && (
              <div style={{ color: 'red' }}>
                Price couldn't start from 0, 1-10 numbers
              </div>
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
            />
            {!formState.comments.isValid && (
              <div style={{ color: 'red' }}>
                Comments should have only 8-120 letters
              </div>
            )}
          </InputItem>
        </InputList>
      </div>
      <BtnBox>
        <MainButton
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
