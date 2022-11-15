import { PetsList, AddUsersPet } from 'components';
import { ThumbText, Text } from './PetsData.styled';

export const PetsData = () => {
  return (
    <>
      <ThumbText>
        <Text>My pets:</Text>
        <AddUsersPet />
      </ThumbText>
      <PetsList />
    </>
  );
};
