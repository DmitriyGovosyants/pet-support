import {
  PetsListStyled,
  PetItem,
  Image,
  ThumbText,
  HeadLine,
  Text,
} from './PetsList.styled';

export const PetsList = () => {
  return (
    <>
      <PetsListStyled>PetsList</PetsListStyled>
      <PetItem>
        <Image>image</Image>
        <ThumbText>
          <HeadLine>name:</HeadLine>
          <Text />
          <HeadLine>Date of birth:</HeadLine>
          <Text />
          <HeadLine>Breed:</HeadLine>
          <Text />
          <HeadLine>Comments:</HeadLine>
          <Text />
        </ThumbText>
      </PetItem>
    </>
  );
};
