import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useSignUpMutation } from '../../redux/authApi';
import { setCredentials } from '../../redux/authSlice';

import {
  FormTitle,
  FormInput,
  FormButton,
  FormText,
  FormWrapper,
} from 'components';
import isEmail from 'validator/lib/isEmail';
import { isCity, isPassword } from 'helpers';
import isAlpha from 'validator/lib/isAlpha';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { dataFormConverter } from 'helpers/dataFormConverter';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { push } = useNavigate();
  const [step, setStep] = useState(0);

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

  const [signUp, { isLoading }] = useSignUpMutation();

  const handleChange = ({ target: { name, value, isValid = true } }) =>
    setFormState(prev => ({ ...prev, [name]: { value, isValid } }));

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = dataFormConverter(formState);
      const result = await signUp(data);
      if (result.data) {
        dispatch(setCredentials(result.data.data.token));
        push('/');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <FormTitle title={'Registration'} />
        <div style={{ display: step === 0 ? 'block' : 'none' }}>
          <FormInput
            placeholder={'Email'}
            type={'Email'}
            name={'email'}
            onChange={handleChange}
            isValid={formState.email.isValid}
            errorMessage="Invalid Email"
          />
          <FormInput
            placeholder={'Password'}
            name={'password'}
            type={'Password'}
            onChange={handleChange}
            isValid={formState.password.isValid}
            errorMessage="Invalid Password"
          />
          <FormInput
            placeholder={'Confirm Password'}
            name={'confirmPassword'}
            type={'Password'}
            onChange={handleChange}
            isValid={formState.confirmPassword.isValid}
            errorMessage="Password and Confirm Password are not equal"
          />
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
          <FormButton
            btnType={'submit'}
            isLoading={isLoading}
            onClick={() => {
              setStep(0);
            }}
          >
            Back
          </FormButton>
        </div>
        <FormButton
          btnType={'submit'}
          isLoading={isLoading}
          onClick={e => {
            if (step === 0) {
              e.preventDefault();
              const isEmailValid = isEmail(formState.email.value);
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
              const isNameValid = isAlpha(formState.name.value);
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
              }
            }
          }}
        >
          {step === 0 ? 'Next' : 'Register'}
        </FormButton>
        <FormText
          text={'Already have an account?'}
          routesPath={'/login'}
          link={'Login'}
        />
      </FormWrapper>
    </form>
  );
};
