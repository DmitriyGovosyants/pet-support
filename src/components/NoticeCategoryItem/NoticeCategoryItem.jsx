import { useState } from 'react';
import { Modal, ModalLearnMore } from 'components';
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
import useCategories from 'hooks/useCategories';
import useDate from 'hooks/useDate';
import { useAuth } from 'redux/useAuth';
import {
  useAddNoticeToFavouriteMutation,
  useRemoveNoticeFromFavouriteMutation,
} from 'redux/noticesApi';
import dogImage from 'data/img/dog.png';
import { toast } from 'react-toastify';

export const NoticeCategoryItem = ({
  petData: { _id, name, breed, location, birthdate, photo, category },
  favorite,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favorite);
  const [age, setAge] = useState('');
  const [categoryName, setCategoryName] = useState('sell');
  const auth = useAuth();
  useCategories(category, setCategoryName);
  useDate(birthdate, setAge);

  const [AddNoticeToFavourite] = useAddNoticeToFavouriteMutation();
  const [removeNoticeFromFavourite] = useRemoveNoticeFromFavouriteMutation();

  const toggleFavourites = () => {
    if (!auth.user) {
      toast.warn('You must sign in for add to favorites!');
      return;
    }
    setIsFavourite(!isFavourite);
    if (isFavourite) {
      removeNoticeFromFavourite(_id);
    } else {
      AddNoticeToFavourite(_id);
    }
  };

  return (
    <>
      <ImgWrapper>
        <Category>{categoryName}</Category>
        <img src={photo || dogImage} alt={breed} />
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
          <Text>{location}</Text>
          <Text>Age:</Text>
          <Text>{age}</Text>
        </Description>
      </About>
      <LearnMore type="button" onClick={() => setShowModal(true)}>
        Learn more
      </LearnMore>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ModalLearnMore toggleModal={() => setShowModal(s => !s)} />
        </Modal>
      )}
    </>
  );
};
