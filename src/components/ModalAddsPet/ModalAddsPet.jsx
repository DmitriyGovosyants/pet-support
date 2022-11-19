import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreatePetMutation } from '../../redux/petApi';
import {
  ModalWrap,
  ButtonClose,
  CloseIcon,
  Label,
  Form,
  Input,
  BtnBox,
  ErrorText,
  FotoWrap,
  InputFoto,
  ErrorTextFoto,
  Textarea,
  Title,
  SubTitle,
  StyledPlusIcon,
  Button,
} from './ModalAddsPets.styled';

export const ModalAddsPet = ({ toggleModal }) => {
  const [nextPage, setNextPage] = useState(false);
  const [addPet] = useCreatePetMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
  });

  const onClickCancelBtn = e => {
    e.preventDefault();
    toggleModal();
  };

  const handleSubmitClick = formData => {
    console.log(addPet(formData));
    addPet(formData);
    toggleModal();
  };

  const onClickNextBtn = () => {
    setNextPage(true);
  };

  const onClickBackBtn = () => {
    setNextPage(false);
  };

  const textRegexp = /[a-zA-Z]+/;
  const dateRegexp = /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/;

  return (
    <>
      <ModalWrap>
        <ButtonClose type="button" onClick={() => toggleModal()}>
          <CloseIcon />
        </ButtonClose>
        <Title>Add pet</Title>
        <Form onSubmit={handleSubmit(handleSubmitClick)}>
          {!nextPage && (
            <>
              <Label htmlFor="petName">Name pet</Label>
              <Input
                id="petName"
                type="text"
                placeholder="Type name pet"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Should exceed at least 2 characters',
                  },
                  maxLength: {
                    value: 16,
                    message: 'Should exceed not more than 16 characters',
                  },
                  pattern: {
                    value: textRegexp,
                    message: 'Name should contain only letters.',
                  },
                })}
                aria-invalid={errors.petName ? 'true' : 'false'}
              />
              {errors.name && <ErrorText>{errors.name?.message}</ErrorText>}
              <Label htmlFor="dateOfBirth">Date of birth</Label>
              <Input
                id="dateOfBirth"
                placeholder="Type date of birth"
                {...register('date', {
                  required: 'Date of birth is required.',
                  pattern: {
                    value: dateRegexp,
                    message: 'Should exceed only numbers. As: 12.12.2012',
                  },
                })}
              />
              {errors.date && (
                <ErrorText role="alert">{errors.date?.message}</ErrorText>
              )}
              <Label htmlFor="breed">Breed</Label>
              <Input
                id="breed"
                type="text"
                placeholder="Type breed"
                {...register('breed', {
                  required: 'Breed is required',
                  maxLength: {
                    value: 16,
                    message: 'Should exceed not more than 16 characters',
                  },
                  minLength: {
                    value: 2,
                    message: 'Should exceed at least 2 characters',
                  },
                  pattern: {
                    value: textRegexp,
                    message: 'Breed should contain only letters.',
                  },
                })}
                aria-invalid={errors.breed ? 'true' : 'false'}
              />
              {errors.breed && (
                <ErrorText role="alert">{errors.breed?.message}</ErrorText>
              )}
            </>
          )}
          {nextPage && (
            <>
              <SubTitle htmlFor="addPhoto">
                Add photo and some comments
              </SubTitle>
              <FotoWrap>
                <InputFoto
                  type="file"
                  id="addPhoto"
                  {...register('avatar', {
                    required: 'Photo is required.',
                  })}
                />
                <StyledPlusIcon />
              </FotoWrap>
              {errors.avatar && (
                <ErrorTextFoto role="alert">
                  {errors.avatar?.message}
                </ErrorTextFoto>
              )}
              <Label htmlFor="addPhoto">Comments</Label>
              <Textarea
                id="Comments"
                {...register('comments', {
                  required: 'Comments is required.',
                  maxLength: {
                    value: 120,
                    message: 'Should exceed not more than 120 characters',
                  },
                  minLength: {
                    value: 8,
                    message: 'Should exceed at least 2 characters',
                  },
                })}
              />
              {errors.comments && (
                <ErrorText role="alert">{errors.comments?.message}</ErrorText>
              )}
            </>
          )}
          <BtnBox>
            {!nextPage && (
              <>
                <Button
                  size={'medium'}
                  width={'fixed'}
                  onClick={onClickNextBtn}
                  active
                  disabled={!isValid}
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
              </>
            )}
            {nextPage && (
              <>
                <Button type={'submit'} size={'medium'} width={'fixed'}>
                  Done
                </Button>
                <Button
                  option={'black'}
                  size={'medium'}
                  width={'fixed'}
                  onClick={onClickBackBtn}
                >
                  Back
                </Button>
              </>
            )}
          </BtnBox>
        </Form>
      </ModalWrap>
    </>
  );
};
