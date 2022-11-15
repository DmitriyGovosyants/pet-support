import { Button } from './PetsInterfaceButton.styled';

export const PetsInterfaceButton = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};
