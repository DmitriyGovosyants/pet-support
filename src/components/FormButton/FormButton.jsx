import { Button, Wrapper } from './FormButton.styled';

export const FormButton = ({ btnType, isLoading, children, onClick }) => {
  return (
    <Wrapper>
      <Button 
        type={btnType} 
        disabled={!!isLoading}
        onClick={ onClick }
      >
        {children}
      </Button>
    </Wrapper>
  );
};
