import { Wrapper, Input, Error } from './MaskInput.styled';

export const MaskInput = ({
  placeholder,
  mask,
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
          mask={mask}
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
