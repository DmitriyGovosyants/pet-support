import { Wrapper, Input, Error } from './FormInput.styled';

export const FormInput = ({
  placeholder,
  type,
  name,
  onChange,
  isValid,
  errorMessage,
}) => {
  return (
    <>
      <Wrapper>
        <Input
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={onChange}
          isValid={isValid}
        />
      </Wrapper>
      {!isValid && <Error>{errorMessage}</Error>}
    </>
  );
};
