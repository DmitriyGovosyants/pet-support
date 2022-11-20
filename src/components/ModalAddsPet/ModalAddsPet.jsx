import { useState } from 'react';

import { isName, isBreed, isComment } from 'helpers';
import { useCreatePetMutation } from '../../redux/usersApi';

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
} from './ModalAddsPets.styled';

export const ModalAddsPet = ({ toggleModal }) => {
  //const dateRegexp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;
  const [step, setStep] = useState(0);
  const [addPet] = useCreatePetMutation();

  const onClickCancelBtn = e => {
    e.preventDefault();
    toggleModal();
  };

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

  const handleChange = ({ target: { name, value, isValid = true } }) =>
    setFormState(prev => ({ ...prev, [name]: { value, isValid } }));

  async function handleSubmit(e) {
    e.preventDefault();
    const petsData = Object.entries(formState).reduce((acc, itm) => {
      acc[itm[0]] = itm[1].value;
      return acc;
    }, {});
    console.log(petsData);

    try {
      addPet(petsData);
    } catch (error) {
      console.log(error);
    }
  }

  const onHandleClick = e => {
    // e.preventDefault();
    if (step === 0) {
      e.preventDefault();
      const isNameValid = isName(formState.name.value);
      const isDateValid = formState.birthdate.value;
      const isBreedValid = isBreed(formState.breed.value);

      if (isNameValid && isDateValid && isBreedValid) {
        setStep(1);
      } else {
        setFormState(prevState => ({
          ...prevState,
          name: {
            value: formState.name.value,
            isValid: isNameValid,
          },
          birthdate: {
            value: formState.birthdate.value,
            isValid: isDateValid,
          },
          breed: {
            value: formState.breed.value,
            isValid: isBreedValid,
          },
        }));
      }
    } else {
      const isCommentsValid = isComment(formState.comments.value);
      if (!isCommentsValid) {
        setFormState(prevState => ({
          ...prevState,
          comments: {
            value: formState.comments.value,
            isValid: isCommentsValid,
          },
        }));

        e.preventDefault();
      }
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
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Type name pet"
              isValid={formState.name.isValid}
              errorMessage="Should be from 2 till 16 characters"
            />
            <Label htmlFor="birthdate">Date of birth</Label>
            <Input
              type="text"
              name="birthdate"
              onChange={handleChange}
              placeholder="Type date of birth"
              isValid={formState.birthdate.isValid}
              errorMessage="Should be DD.MM.YYYY"
            />
            <Label htmlFor="breed">Breed</Label>
            <Input
              type="text"
              name="breed"
              onChange={handleChange}
              placeholder="Type breed"
              isValid={formState.breed.isValid}
              errorMessage="Should be from 2 till 16 characters"
            />
            <BtnBox>
              <Button
                type={'submit'}
                size={'medium'}
                width={'fixed'}
                onClick={onHandleClick}
              >
                Next
              </Button>
              <Button
                option={'black'}
                size={'medium'}
                width={'fixed'}
                onClick={onClickCancelBtn}
              >
                Cancel
              </Button>
            </BtnBox>
          </div>
          <div style={{ display: step === 1 ? 'block' : 'none' }}>
            <SubTitle htmlFor="addPhoto">Add photo and some comments</SubTitle>
            <FotoWrap>
              <InputFoto
                type="file"
                name="file"
                accept="image/*, image/jpeg, image/jpg"
                multiple
                onChange={handleChange}
              />
              <StyledPlusIcon />
            </FotoWrap>
            <Textarea
              name="comments"
              onChange={handleChange}
              placeholder="Type comments"
              rows="5"
              isValid={formState.comments.isValid}
              errorMessage="Should be from 2 till 16 characters"
            />
            <BtnBox>
              <Button
                type={'submit'}
                size={'medium'}
                width={'fixed'}
                onClick={onHandleClick}
              >
                Done
              </Button>
              <Button
                option={'black'}
                size={'medium'}
                width={'fixed'}
                onClick={() => {
                  setStep(0);
                }}
              >
                Back
              </Button>
            </BtnBox>
          </div>
        </Form>
      </ModalWrap>
    </>
  );
};
