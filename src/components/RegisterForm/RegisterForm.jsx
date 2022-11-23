import React, { useState } from 'react';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';
import {
  isCity,
  isPassword,
  isName,
  dataFormConverter,
  isDomenName,
} from 'helpers';
import { useSignUpMutation } from '../../redux/authApi';
import eyeImg from '../../data/img/eye.png';
import eyeClosedImg from '../../data/img/eye-blocked.png';
import {
  FormTitle,
  FormInput,
  FormText,
  FormWrapper,
  MainButton,
} from 'components';
import { Wrapper, Button, EyeBtn, EyeConfBtn } from './RegisterForm.styled';
import { validationErrMsg } from 'constants/constants';

export const RegisterForm = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
    confirmPassword: {
      value: '',
      isValid: true,
    },
    name: {
      value: '',
      isValid: true,
    },
    city: {
      value: '',
      isValid: true,
    },
    phone: {
      value: '',
      isValid: true,
    },
  });

  const handleChange = ({ target: { name, value, isValid = true } }) =>
    setFormState(prev => ({ ...prev, [name]: { value, isValid } }));

  const handleSubmit = async () => {
    try {
      const data = dataFormConverter(formState);
      await signUp(data).unwrap();
    } catch (err) {
      if (err.status === 409) {
        toast.error(err.data.message);
      }
      console.log(err);
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <FormTitle title={'Registration'} />
        <div style={{ display: step === 0 ? 'block' : 'none' }}>
          <FormInput
            placeholder={'Email'}
            type={'Email'}
            name={'email'}
            onChange={handleChange}
            isValid={formState.email.isValid}
            errorMessage={validationErrMsg.email}
          />
          <FormInput
            placeholder={'Password'}
            name={'password'}
            type={showPassword ? 'text' : 'password'}
            id={'password'}
            onChange={handleChange}
            isValid={formState.password.isValid}
            errorMessage={validationErrMsg.password}
          />
          <EyeBtn type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword && <img src={eyeClosedImg} alt="eye" width={20} />}
            {!showPassword && <img src={eyeImg} alt="eye" width={20} />}
          </EyeBtn>
          <FormInput
            placeholder={'Confirm Password'}
            name={'confirmPassword'}
            type={showPassword ? 'text' : 'password'}
            id={'password'}
            onChange={handleChange}
            isValid={formState.confirmPassword.isValid}
            errorMessage="Password and Confirm Password are not equal"
          />
          <EyeConfBtn
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword && <img src={eyeClosedImg} alt="eye" width={20} />}
            {!showPassword && <img src={eyeImg} alt="eye" width={20} />}
          </EyeConfBtn>
        </div>
        <div style={{ display: step === 1 ? 'block' : 'none' }}>
          <FormInput
            placeholder={'Name'}
            type={'name'}
            name={'name'}
            onChange={handleChange}
            isValid={formState.name.isValid}
            errorMessage="Name should contain only letters"
          />
          <FormInput
            placeholder={'City, Region'}
            name={'city'}
            type={'City'}
            onChange={handleChange}
            isValid={formState.city.isValid}
            errorMessage="Should be in format - City, Region"
          />
          <FormInput
            placeholder={'Mobile Phone'}
            name={'phone'}
            type={'phone'}
            onChange={handleChange}
            isValid={formState.phone.isValid}
            errorMessage="Should be a correct mobile phone"
          />
        </div>
        <Wrapper>
          <MainButton
            btnType={'submit'}
            disabled={isLoading}
            onClick={e => {
              if (step === 0) {
                e.preventDefault();
                const isEmailValid =
                  isEmail(formState.email.value) &&
                  isDomenName(formState.email.value);
                const isPasswordValid = isPassword(formState.password.value);
                const isConfirmPasswordValid =
                  isPasswordValid &&
                  formState.password.value === formState.confirmPassword.value;
                if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
                  setStep(1);
                } else {
                  setFormState(prevState => ({
                    ...prevState,
                    email: {
                      value: formState.email.value,
                      isValid: isEmailValid,
                    },
                    password: {
                      value: formState.password.value,
                      isValid: isPasswordValid,
                    },
                    confirmPassword: {
                      value: formState.confirmPassword.value,
                      isValid: isConfirmPasswordValid,
                    },
                  }));
                }
              } else {
                const isNameValid = isName(formState.name.value);
                const isCityValid = isCity(formState.city.value);
                const isPhoneValid = isMobilePhone(
                  formState.phone.value,
                  'uk-UA',
                  { strictMode: true }
                );

                if (!isNameValid || !isCityValid || !isPhoneValid) {
                  setFormState(prevState => ({
                    ...prevState,
                    name: {
                      value: formState.name.value,
                      isValid: isNameValid,
                    },
                    city: {
                      value: formState.city.value,
                      isValid: isCityValid,
                    },
                    phone: {
                      value: formState.phone.value,
                      isValid: isPhoneValid,
                    },
                  }));

                  e.preventDefault();
                } else {
                  handleSubmit();
                }
              }
            }}
          >
            {step === 0 ? 'Next' : 'Register'}
          </MainButton>
          {step === 1 && (
            <Button>
              <MainButton
                option={'black'}
                btnType={'submit'}
                isLoading={isLoading}
                onClick={() => {
                  setStep(0);
                }}
              >
                Back
              </MainButton>
            </Button>
          )}
        </Wrapper>
        <FormText
          text={'Already have an account?'}
          routesPath={'/login'}
          link={'Login'}
        />
      </form>
    </FormWrapper>
  );
};
