import {
  Container,
  ImgWrapper,
  Img,
  Title,
  FeaturesList,
  FeaturesItem,
  FeaturesDescription,
  FeaturesDefinition,
  ContactButton,
  ChangeFavoriteStatusBtn,
  CloseBtn,
  CategoryMark,
  ContactLink,
  FeaturesWrapper,
  Wrapper,
  BtnWrapper,
} from './ModalNotice.styled';

import { ReactComponent as HeartIcon } from 'data/img/favourite-icon.svg';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';
import dogImage from 'data/img/dog.png';

export const ModalNotice = ({
  petData,
  favorite,
  toggleModal,
  toggleFavourites,
}) => {
  const {
    title,
    avatarURL,
    birthdate,
    breed,
    category,
    comments,
    location,
    name,
    owner,
    price,
    sex,
  } = petData;

  return (
    <Container>
      <CloseBtn type="button" onClick={() => toggleModal()}>
        <CloseIcon />
      </CloseBtn>

      <Wrapper>
        <ImgWrapper>
          <Img src={avatarURL || dogImage} alt="pet" />
          <CategoryMark>{category}</CategoryMark>
        </ImgWrapper>

        <FeaturesWrapper>
          <Title>{title}</Title>
          <FeaturesList>
            {name && (
              <FeaturesItem>
                <FeaturesDescription>Name:</FeaturesDescription>
                <FeaturesDefinition>{name}</FeaturesDefinition>
              </FeaturesItem>
            )}
            {birthdate && (
              <FeaturesItem>
                <FeaturesDescription>Birthday:</FeaturesDescription>
                <FeaturesDefinition>{birthdate}</FeaturesDefinition>
              </FeaturesItem>
            )}
            {breed && (
              <FeaturesItem>
                <FeaturesDescription>Breed:</FeaturesDescription>
                <FeaturesDefinition>{breed}</FeaturesDefinition>
              </FeaturesItem>
            )}
            <FeaturesItem>
              <FeaturesDescription>Loсation:</FeaturesDescription>
              <FeaturesDefinition>{location}</FeaturesDefinition>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>The sex:</FeaturesDescription>
              <FeaturesDefinition>{sex}</FeaturesDefinition>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>Email:</FeaturesDescription>
              <ContactLink href={`mailto: ${owner?.email}`}>
                {owner?.email}
              </ContactLink>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>Phone:</FeaturesDescription>
              <ContactLink href={`tel: ${owner?.phone}`}>
                {owner?.phone}
              </ContactLink>
            </FeaturesItem>
            {category.toLowerCase() === 'sell' && (
              <FeaturesItem>
                <FeaturesDescription>Sell:</FeaturesDescription>
                <FeaturesDefinition>{price}$</FeaturesDefinition>
              </FeaturesItem>
            )}
          </FeaturesList>
        </FeaturesWrapper>
      </Wrapper>

      <FeaturesDefinition>
        <b>Comments:</b> {comments}
      </FeaturesDefinition>

      <BtnWrapper>
        <ContactButton href={`tel: ${owner?.phone}`}>Contact</ContactButton>
        <ChangeFavoriteStatusBtn type="button" onClick={toggleFavourites}>
          {!favorite ? 'Add to' : 'Remove from'}
          <HeartIcon />
        </ChangeFavoriteStatusBtn>
      </BtnWrapper>
    </Container>
  );
};
