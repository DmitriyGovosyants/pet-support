import { Wrapper, Input, Error } from './FormInput.styled';

export const FormInput = ({
  mask,
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
          mask = {mask}
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
