import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import maleImg from '../../data/img/male.png';
import femaleImg from '../../data/img/female.png';
import plusImg from '../../data/img/plus.png';
import {
  addNoticeValidationModel,
  isBreed,
  isCity,
  isComments,
  isName,
  isPrice,
  isTitle,
} from 'helpers';
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
  FormTextarea,
  SelectSex,
  SexInput,
  SexLabel,
  ImgWrapper,
  FormInputLoadWrapper,
  FormInputLoad,
  FormInputLoadImg,
  FormInputLoadPlus,
  BtnBox,
  BtnClose,
} from './ModalAddNotice.styled';
import { useAddNoticeMutation } from 'redux/noticesApi';
import { toast } from 'react-toastify';

export const ModalAddNotice = ({ toggleModal }) => {
  const [formState, setFormState] = useState(addNoticeValidationModel);
  const [addNotice] = useAddNoticeMutation();
  const [step, setStep] = useState(1);
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [fileError, setFileError] = useState(false);

  const formData = new FormData();

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
      isDate(birthdate.value, { format: 'DD.MM.YYYY' }) ||
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
    const { sex, location, price, comments, category } = formState;

    const handlePriceValidate = () => {
      if (category.value === 'sell') {
        return isPrice(price.value);
      }
      return true;
    };

    const isSexValid = !isEmpty(sex.value);
    const isLocationValid = isCity(location.value);
    const isPriceValid = handlePriceValidate();
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

  const handleChange = ({ target: { name, value, isValid = true } }) => {
    if (name !== 'avatar') {
      setFormState(prev => ({ ...prev, [name]: { value, isValid } }));
      return;
    }

    const fileInput = document.getElementById('file-id');
    const file = fileInput.files[0];

    if (file['size'] > 1000000) {
      setFileError(true);
      return;
    }

    setAvatarData(file);
    setFileError(false);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      setAvatar(base64data);
    };
  };

  const handleSubmit = async () => {
    const data = Object.entries(formState);

    for (let i = 0; i < data.length; i += 1) {
      if (formState.category.value === 'sell') {
        formData.append(data[i][0], data[i][1].value);
      }
      if (formState.category.value !== 'sell' && data[i][0] !== 'price') {
        formData.append(data[i][0], data[i][1].value);
      }
    }

    if (avatarData) {
      formData.append('avatar', avatarData);
    }

    try {
      await addNotice(formData);
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
              type={'text'}
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
              type={'text'}
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
              type={'text'}
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
              type={'text'}
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
              type={'text'}
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
          {formState.category.value === 'sell' && (
            <InputItem>
              <FormInputLabel>
                Price<RequiredSymbol>*</RequiredSymbol>
              </FormInputLabel>
              <FormInput
                placeholder={'Type price'}
                type={'number'}
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
          )}
          <InputItem>
            <FormInputLabel>Load the pet’s image</FormInputLabel>
            <FormInputLoadWrapper>
              <FormInputLoad
                type={'file'}
                name={'avatar'}
                onChange={handleChange}
                id={'file-id'}
                accept=".png, .jpeg, .jpg, .webp"
              />
              <FormInputLoadPlus src={plusImg} alt="" />
              {avatar && <FormInputLoadImg src={avatar} alt="" />}
            </FormInputLoadWrapper>
            {fileError && <div style={{ color: 'red' }}>File too large</div>}
          </InputItem>
          <InputItem>
            <FormInputLabel>
              Comments<RequiredSymbol>*</RequiredSymbol>
            </FormInputLabel>
            <FormTextarea
              placeholder={'Type comments'}
              name={'comments'}
              rows={'3'}
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
