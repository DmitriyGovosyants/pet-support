import { PetsList, AddUsersPet } from 'components';
import { PetsDataStyled, ThumbText, Text } from './PetsData.styled';

export const PetsData = () => {
  return (
    <PetsDataStyled>
      <ThumbText>
        <Text>My pets:</Text>
        <AddUsersPet />
      </ThumbText>
      <PetsList />
    </PetsDataStyled>
  );
};
