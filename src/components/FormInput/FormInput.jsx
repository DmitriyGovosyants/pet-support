import { Wrapper, Input } from './FormInput.styled';

export const FormInput = ({ placeholder, type, name, onChange, isValid, errorMessage }) => {
  return (
    <Wrapper>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        isValid={ isValid }
      />
      {!isValid && <div style={{ color: 'red'}}>{ errorMessage }</div> }
    </Wrapper>
  );
};
