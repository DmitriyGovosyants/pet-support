import { Wrapper, Input, Error } from './FormInput.styled';

export const FormInput = ({
  placeholder,
  type,
  name,
  onChange,
  isvalid,
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
          isvalid={isvalid}
        />
      </Wrapper>
      {!isvalid && <Error>{errorMessage}</Error>}
    </>
  );
};
