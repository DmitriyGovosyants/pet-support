import { useState } from 'react';
import { Modal, ModalNotice } from 'components';
import {
  ImgWrapper,
  Button,
  StyledFavouriteIcon,
  StyledToFavouriteIcon,
  Category,
  Title,
  Description,
  About,
  Text,
  LearnMore,
} from './NoticeCategoryItem.styled';

const categoryNameMock = 'Category Name';

export const NoticeCategoryItem = ({
  petData: { name, breed, place, age, photo },
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavourite, setIsFavourite] = useState(true);

  const toggleFavourites = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <>
      <ImgWrapper>
        <Category>{categoryNameMock}</Category>
        <img src={photo} alt={breed} />
        <Button type="button" onClick={toggleFavourites}>
          {isFavourite ? <StyledFavouriteIcon /> : <StyledToFavouriteIcon />}
        </Button>
      </ImgWrapper>
      <About>
        <Title>{name}</Title>
        <Description>
          <Text>Breed:</Text>
          <Text>{breed}</Text>
          <Text>Place:</Text>
          <Text>{place}</Text>
          <Text>Age:</Text>
          <Text>{age}</Text>
        </Description>
        <LearnMore type="button" onClick={() => setShowModal(true)}>
          Learn more
        </LearnMore>
      </About>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ModalNotice toggleModal={() => setShowModal(s => !s)} />
        </Modal>
      )}
    </>
  );
};
