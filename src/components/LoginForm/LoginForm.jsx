import React, { useState, useEffect } from 'react';
import isEmail from 'validator/lib/isEmail';
import { toast } from 'react-toastify';
import { isPassword, dataFormConverter } from 'helpers';
import { useLogInMutation } from '../../redux/authApi';
import eyeImg from '../../data/img/eye.png';
import eyeClosedImg from '../../data/img/eye-blocked.png';
import {
  FormTitle,
  FormInput,
  FormText,
  FormWrapper,
  MainButton,
} from 'components';
import { Wrapper, EyeBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const [login, { isError, isLoading }] = useLogInMutation();
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
  });

  useEffect(() => {
    if (isError) {
      toast.error('Wrong email or password!');
    }
  }, [isError]);

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
      await login(data).unwrap();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
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
          type={showPassword ? 'text' : 'password'}
          name={'password'}
          id={'password'}
          onChange={handleChange}
          isValid={formState.password.isValid}
          errorMessage="Invalid Password"
        />
        <EyeBtn type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword && <img src={eyeClosedImg} alt="eye" width={20} />}
          {!showPassword && <img src={eyeImg} alt="eye" width={20} />}
        </EyeBtn>
        <Wrapper>
          <MainButton type={'submit'} disabled={isLoading}>
            Login
          </MainButton>
        </Wrapper>
        <FormText
          text={"Don't have an account?"}
          routesPath={'/register'}
          link={'Register'}
        />
      </form>
    </FormWrapper>
  );
};
