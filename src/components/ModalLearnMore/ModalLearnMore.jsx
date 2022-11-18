import { useState } from 'react';
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
} from './ModalLearnMore.styled';

import { ReactComponent as HeartIcon } from 'data/img/favourite-icon.svg';
import { ReactComponent as CloseIcon } from 'data/img/close-icon.svg';

export const ModalLearnMore = ({ toggleModal }) => {
  const [favorite, setFavorite] = useState(false);
  const category = 'In good hands';

  return (
    <Container>
      <CloseBtn type="button" onClick={() => toggleModal()}>
        <CloseIcon />
      </CloseBtn>

      <Wrapper>
        <ImgWrapper>
          <Img
            src="https://media1.popsugar-assets.com/files/thumbor/wh0y9TxHHfw73Je1ETKQJAyEJ38/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/11/26/625/n/1922398/a3dbbb89b318aa5b_thumb_temp_image35315381417010330/i/Dog-Dancing-Flo-Rida-Low-Video.jpg"
            alt="pet"
          />
          <CategoryMark>{category}</CategoryMark>
        </ImgWrapper>

        <FeaturesWrapper>
          <Title>Сute dog looking for a home</Title>
          <FeaturesList>
            <FeaturesItem>
              <FeaturesDescription>Name:</FeaturesDescription>
              <FeaturesDefinition>Rich</FeaturesDefinition>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>Birthday:</FeaturesDescription>
              <FeaturesDefinition>21.09.2020</FeaturesDefinition>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>Breed:</FeaturesDescription>
              <FeaturesDefinition>Pomeranian</FeaturesDefinition>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>Loсation:</FeaturesDescription>
              <FeaturesDefinition>Lviv</FeaturesDefinition>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>The sex:</FeaturesDescription>
              <FeaturesDefinition>male</FeaturesDefinition>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>Email:</FeaturesDescription>
              <ContactLink href="mailto: user@mail.com">
                user@mail.com
              </ContactLink>
            </FeaturesItem>
            <FeaturesItem>
              <FeaturesDescription>Phone:</FeaturesDescription>
              <ContactLink href="tel: +380971234567">+380971234567</ContactLink>
            </FeaturesItem>
            {category.toLowerCase() === 'sell' && (
              <FeaturesItem>
                <FeaturesDescription>Sell:</FeaturesDescription>
                <FeaturesDefinition>150$</FeaturesDefinition>
              </FeaturesItem>
            )}
          </FeaturesList>
        </FeaturesWrapper>
      </Wrapper>

      <FeaturesDefinition>
        <b>Comments:</b> Lorem ipsum dolor sit amet, consectetur Lorem ipsum
        dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
        Lorem
      </FeaturesDefinition>

      <BtnWrapper>
        <ContactButton href="tel: +380971234567">Contact</ContactButton>
        <ChangeFavoriteStatusBtn
          type="button"
          onClick={() => setFavorite(s => !s)}
        >
          {!favorite ? 'Add to' : 'Delete from'}
          <HeartIcon />
        </ChangeFavoriteStatusBtn>
      </BtnWrapper>
    </Container>
  );
};
