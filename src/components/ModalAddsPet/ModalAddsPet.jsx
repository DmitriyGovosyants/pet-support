import { useState } from 'react';
import { useCreatePetMutation } from '../../redux/usersApi';
import { 
  isName, 
  isBreed, 
  isComments,
} from 'helpers';
import {
  ModalWrap,
  ButtonClose,
  CloseIcon,
  Label,
  Form,
  Input,
  BtnBox,
  Textarea,
  Title,
  SubTitle,
  FotoWrap,
  InputFoto,
  StyledPlusIcon,
  Button,
  ModalAddImg,
} from './ModalAddsPets.styled';
import isDate from 'validator/lib/isDate';
import isEmpty from 'validator/lib/isEmpty';
import { toast } from 'react-toastify';

export const ModalAddsPet = ({ toggleModal }) => {
  const [addPet] = useCreatePetMutation();
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

    avatar: {
      value: '',
      isValid: true,
    },
    comments: {
      value: '',
      isValid: true,
    },
  });

  console.log(formState);

  const formData = new FormData();
  
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

    const isNameValid = isName(name.value) || !isEmpty(name.value);
    const isDateValid =
      isDate(birthdate.value, { format: 'DD.MM.YYYY' }) ||
      !isEmpty(birthdate.value);
    const isBreedValid = isBreed(breed.value) || !isEmpty(breed.value);

    if (
      !isNameValid ||
      !isDateValid ||
      !isBreedValid
    ) {
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
    
    for (let i = 0; i < data.length; i += 1) {
      formData.append(data[i][0], data[i][1].value)
    }

    if (avatarData) {
      formData.append('avatar', avatarData);
    }

    try {
      await addPet(formData);
      toggleModal();
      toast.success('Your notice is added');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ModalWrap>
        <ButtonClose type="button" onClick={() => toggleModal()}>
          <CloseIcon />
        </ButtonClose>
        <Form onSubmit={handleSubmit}>
          <div style={{ display: step === 0 ? 'block' : 'none' }}>
            <Title>Add pet</Title>
            <Label htmlFor="name">Name pet</Label>
            <Input
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
            <Label htmlFor="birthdate">Date of birth</Label>
            <Input
              placeholder={'Type date of birth'}
              type={'text'}
              name={'birthdate'}
              onChange={handleChange}
              isValid={formState.birthdate.isValid}
            />
            {!formState.birthdate.isValid && (
              <div style={{ color: 'red' }}>
                Please, type in DD.MM.YYYY format
              </div>
            )}
            <Label htmlFor="breed">Breed</Label>
            <Input
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
          </div>
          <div style={{ display: step === 1 ? 'block' : 'none' }}>
            <SubTitle htmlFor="addPhoto">Add photo and some comments</SubTitle>
            <FotoWrap>
              <InputFoto
                type={'file'}
                name={'avatar'}
                accept=".png, .jpeg, .jpg, .webp"
                id={'file-id'}
                onChange={handleChange}
              />
              {avatar ? (
                <ModalAddImg
                  src={avatar}
                  alt=""
                />
              ) : (
                <StyledPlusIcon />
              )}
              {fileError && <div style={{ color: 'red' }}>File too large</div>}
            </FotoWrap>
            <Textarea
              name={'comments'}
              onChange={handleChange}
              placeholder={'Type comments'}
              rows="5"
              isValid={formState.comments.isValid}
            />
            {!formState.comments.isValid && (
              <div style={{ color: 'red' }}>
                Comments should have only 8-120 letters
              </div>
            )}
          </div>
          <BtnBox>
              <Button
                size={'medium'}
                width={'fixed'}
                onClick={() => handleFirstBtn()}
              >
                {step === 0 ? 'Next' : 'Done'}
              </Button>
              <Button
                option={'black'}
                size={'medium'}
                width={'fixed'}
                onClick={() => handleSecondBtn()}
              >
                {step === 0 ? 'Cancel' : 'Back'}
              </Button>
            </BtnBox>
        </Form>
      </ModalWrap>
    </>
  );
};
