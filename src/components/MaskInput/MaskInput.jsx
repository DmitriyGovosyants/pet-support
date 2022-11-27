import { Wrapper, Input, Error } from './MaskInput.styled';

export const MaskInput = ({
  placeholder,
  mask,
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
          mask={mask}
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
