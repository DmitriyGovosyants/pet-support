import { useState } from 'react';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import { useCreatePetMutation } from '../../redux/usersApi';
import { isName, isBreed, isComments, isDate, isDatePast } from 'helpers';
import plusImg from '../../data/img/plus.png';
import {
  ModalWrap,
  BtnClose,
  Label,
  Input,
  BtnBox,
  Textarea,
  Title,
  SubTitle,
  FormInputLoadWrapper,
  FormInputLoad,
  FormInputLoadImg,
  FormInputLoadPlus,
} from './ModalAddsPets.styled';
import { toast } from 'react-toastify';
import { MainButton } from 'components';

export const ModalAddsPet = ({ toggleModal }) => {
  const [addPet, { isLoading }] = useCreatePetMutation();
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
  const [fileError, setFileError] = useState(false);
  const [step, setStep] = useState(0);

  const [formState, setFormState] = useState({
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
    comments: {
      value: '',
      isValid: true,
    },
  });

  const handleFirstBtn = () => {
    if (step === 0) {
      validateFirstPage();
    }
    if (step === 1) {
      validateSecondPage();
    }
  };

  const handleSecondBtn = () => {
    if (step === 0) {
      toggleModal();
    }
    if (step === 1) {
      setStep(0);
    }
  };

  const validateFirstPage = () => {
    const { name, birthdate, breed } = formState;

    const isNameValid = isName(name.value);
    const isDateValid = isDatePast(birthdate.value) && isDate(birthdate.value);
    const isBreedValid = isBreed(breed.value);

    if (!isNameValid || !isDateValid || !isBreedValid) {
      setFormState(prevState => ({
        ...prevState,
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

    setStep(1);
  };

  const validateSecondPage = () => {
    const { comments } = formState;

    const isCommentsValid = isComments(comments.value);

    if (!isCommentsValid) {
      setFormState(prevState => ({
        ...prevState,
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
    const formData = new FormData();

    for (let i = 0; i < data.length; i += 1) {
      formData.append(data[i][0], data[i][1].value);
    }

    if (avatarData) {
      formData.append('avatar', avatarData);
    }

    try {
      await addPet(formData);
      toggleModal();
      toast.success('Your pet is added');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalWrap onSubmit={handleSubmit}>
      <BtnClose type="button" onClick={() => toggleModal()}>
        <CloseIcon />
      </BtnClose>
      <div style={{ display: step === 0 ? 'block' : 'none' }}>
        <Title>Add pet</Title>
        <Label htmlFor="name">Name pet</Label>
        <Input
          placeholder={'Type name pet'}
          type={'text'}
          name={'name'}
          onChange={handleChange}
        />
        {!formState.name.isValid && (
          <div style={{ color: 'red' }}>Name should have only 2-16 letters</div>
        )}
        <Label htmlFor="birthdate">Date of birth</Label>
        <Input
          placeholder={'Type date of birth'}
          type={'text'}
          name={'birthdate'}
          onChange={handleChange}
        />
        {!formState.birthdate.isValid && (
          <div style={{ color: 'red' }}>
            Please, type in DD.MM.YYYY format and past date
          </div>
        )}
        <Label htmlFor="breed">Breed</Label>
        <Input
          placeholder={'Type breed'}
          type={'text'}
          name={'breed'}
          onChange={handleChange}
        />
        {!formState.breed.isValid && (
          <div style={{ color: 'red' }}>
            Breed should have only 2-16 letters
          </div>
        )}
      </div>
      <div style={{ display: step === 1 ? 'block' : 'none' }}>
        <SubTitle htmlFor="addPhoto">Add photo and some comments</SubTitle>
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
          {fileError && <div style={{ color: 'red' }}>File too large</div>}
        </FormInputLoadWrapper>
        <Label htmlFor="name">Comments</Label>
        <Textarea
          name={'comments'}
          onChange={handleChange}
          placeholder={'Type comments'}
          rows="3"
        />
        {!formState.comments.isValid && (
          <div style={{ color: 'red' }}>
            Comments should have only 8-120 letters
          </div>
        )}
      </div>
      <BtnBox>
        <MainButton
          size={'medium'}
          width={'fixed'}
          disabled={isLoading}
          onClick={() => handleFirstBtn()}
        >
          {step === 0 ? 'Next' : 'Done'}
        </MainButton>
        <MainButton
          option={'black'}
          size={'medium'}
          width={'fixed'}
          onClick={() => handleSecondBtn()}
        >
          {step === 0 ? 'Cancel' : 'Back'}
        </MainButton>
      </BtnBox>
    </ModalWrap>
  );
};
