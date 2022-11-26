import { useState } from 'react';
import { useCreatePetMutation } from '../../redux/usersApi';
import { isName, isBreedAddPet, isComments, isDate, isDatePast } from 'helpers';
import plusImg from '../../data/img/plus.png';
import {
  ModalWrap,
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
  RequiredSymbol,
} from './ModalAddsPets.styled';
import { toast } from 'react-toastify';
import {
  MainButton,
  ModalBtnClose,
  Spinner,
  ValidationError,
} from 'components';
import { validationErrMsg, validFileExtension } from 'constants/constants';

export const ModalAddsPet = ({ toggleModal }) => {
  const [addPet, { isLoading }] = useCreatePetMutation();
  const [avatarData, setAvatarData] = useState();
  const [avatar, setAvatar] = useState();
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
    const isBreedValid = isBreedAddPet(breed.value);

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
    const fileNameSplit = file.name.split('.');
    const isValidFileExtension = validFileExtension.includes(
      fileNameSplit[fileNameSplit.length - 1]
    );

    if (file.size > 1000000) {
      toast.error(validationErrMsg.avatarIsTooLarge);
      setAvatar();
      setAvatarData();
      return;
    }

    if (!isValidFileExtension) {
      toast.error(validationErrMsg.avatarExtensionFailure);
      setAvatar();
      setAvatarData();
      return;
    }

    setAvatarData(file);

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
      <Title>Add pet</Title>
      <div style={{ display: step === 0 ? 'block' : 'none' }}>
        <Label htmlFor="name">
          Name pet<RequiredSymbol>*</RequiredSymbol>
        </Label>
        <Input
          placeholder={'Type name pet'}
          type={'text'}
          name={'name'}
          onChange={handleChange}
        />
        <ValidationError
          message={validationErrMsg.petName}
          isHidden={formState.name.isValid}
        />
        <Label htmlFor="birthdate">
          Date of birth<RequiredSymbol>*</RequiredSymbol>
        </Label>
        <Input
          placeholder={'Type date of birth'}
          type={'text'}
          name={'birthdate'}
          onChange={handleChange}
        />
        <ValidationError
          message={validationErrMsg.birthdate}
          isHidden={formState.birthdate.isValid}
        />
        <Label htmlFor="breed">
          Breed<RequiredSymbol>*</RequiredSymbol>
        </Label>
        <Input
          placeholder={'Type breed'}
          type={'text'}
          name={'breed'}
          onChange={handleChange}
        />
        <ValidationError
          message={validationErrMsg.breedAddPet}
          isHidden={formState.breed.isValid}
        />
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
        </FormInputLoadWrapper>
        <Label htmlFor="name">
          Comments<RequiredSymbol>*</RequiredSymbol>
        </Label>
        <Textarea
          name={'comments'}
          onChange={handleChange}
          placeholder={'Type comments'}
          rows="3"
        />
        <ValidationError
          message={validationErrMsg.comments}
          isHidden={formState.comments.isValid}
        />
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
      <ModalBtnClose toggleModal={toggleModal} />
      {isLoading && <Spinner h={'60'} w={'60'} />}
    </ModalWrap>
  );
};
