import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useLogInMutation } from '../../redux/authApi';
import { setCredentials } from '../../redux/authSlice';

import {
  FormTitle,
  FormInput,
  FormButton,
  FormText,
  FormWrapper,
} from 'components';
import { isPassword } from 'helpers';
import isEmail from 'validator/lib/isEmail';
import { dataFormConverter } from 'helpers/dataFormConverter';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  });

  const [login, { isLoading }] = useLogInMutation();

  const handleChange = ({ target: { name, value, isValid = true } }) =>
    setFormState(prev => ({ ...prev, [name]: { value, isValid } }));

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isEmail(formState.email.value)) {
      setFormState(prevState => ({
        ...prevState,
        email: {
          ...prevState.email,
          isValid: false,
        },
      }));
      return;
    }

    console.log();

    if (!isPassword(formState.password.value)) {
      setFormState(prevState => ({
        ...prevState,
        password: {
          ...prevState.password,
          isValid: false,
        },
      }));
      return;
    }

    try {
      const data = dataFormConverter(formState);
      const result = await login(data);
      console.log('data: ', result.data.data);
      if (result.data.data.token) {
        dispatch(setCredentials(result.data.data.token));
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormWrapper>
        <FormTitle title={'Login'} />
        <FormInput
          placeholder={'Email'}
          type={'text'}
          name={'email'}
          onChange={handleChange}
          isValid={formState.email.isValid}
          errorMessage="Invalid Email"
        />
        <FormInput
          placeholder={'Password'}
          type={'password'}
          name={'password'}
          onChange={handleChange}
          isValid={formState.password.isValid}
          errorMessage="Invalid Password"
        />
        <FormButton btnType={'submit'} isLoading={isLoading}>
          Login
        </FormButton>
        <FormText
          text={"Don't have an account?"}
          routesPath={'/register'}
          link={'Register'}
        />
      </FormWrapper>
    </form>
  );
};
