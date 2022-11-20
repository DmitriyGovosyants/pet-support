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
import useCategories from 'hooks/useCategories';
import useDate from 'hooks/useDate';
import { useAuth } from 'redux/useAuth';
import {
  useAddNoticeToFavouriteMutation,
  useRemoveNoticeFromFavouriteMutation,
} from 'redux/noticesApi';
import dogImage from 'data/img/dog.png';
import { toast } from 'react-toastify';

export const NoticeCategoryItem = ({ petData, favorite }) => {
  const { _id, title, breed, location, birthdate, avatarURL, category, price } =
    petData;
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
        <img src={avatarURL || dogImage} alt={breed} />
        <Button type="button" onClick={toggleFavourites}>
          {isFavourite ? <StyledFavouriteIcon /> : <StyledToFavouriteIcon />}
        </Button>
      </ImgWrapper>
      <Title>{title}</Title>
      <About>
        <Description>
          <Text>Breed:</Text>
          <Text>{breed}</Text>
          <Text>Place:</Text>
          <Text>{location}</Text>
          <Text>Age:</Text>
          <Text>{age}</Text>
          {categoryName === 'sell' ? (
            <>
              <Text>Price:</Text>
              <Text>{price}</Text>
            </>
          ) : (
            <>
              <Text></Text>
              <Text></Text>
            </>
          )}
        </Description>
        <LearnMore type="button" onClick={() => setShowModal(true)}>
          Learn more
        </LearnMore>
      </About>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ModalNotice
            petData={petData}
            favorite={favorite}
            toggleModal={() => setShowModal(s => !s)}
            toggleFavourites={toggleFavourites}
          />
        </Modal>
      )}
    </>
  );
};
