import { useState } from 'react';
import { Modal, ModalNotice } from 'components';
import {
  ImgWrapper,
  Image,
  Button,
  StyledFavouriteIcon,
  StyledToFavouriteIcon,
  Category,
  Title,
  Description,
  About,
  Text,
  LearnMore,
  StyledDelete,
} from './NoticeCategoryItem.styled';
import useCategories from 'hooks/useCategories';
import useDate from 'hooks/useDate';
import { useAuth } from 'redux/useAuth';
import {
  useAddNoticeToFavouriteMutation,
  useRemoveNoticeFromFavouriteMutation,
  useRemovePrivateNoticeMutation,
} from 'redux/noticesApi';
import petTemlate from 'data/img/pet-template.jpg';
import { toast } from 'react-toastify';

export const NoticeCategoryItem = ({ petData, favorite, isPrivate }) => {
  const { _id, title, breed, location, birthdate, avatarURL, category, price } =
    petData;

  const [showModal, setShowModal] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favorite);
  const [age, setAge] = useState('');
  const [categoryName, setCategoryName] = useState('sell');
  const auth = useAuth();
  useCategories(category, setCategoryName);
  useDate(birthdate, setAge);

  const [removePrivateNotice] = useRemovePrivateNoticeMutation();
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

  const removePrivate = () => {
    removePrivateNotice(_id);
  };

  return (
    <>
      <ImgWrapper>
        <Category>{categoryName}</Category>
        <Image
          src={avatarURL || petTemlate}
          alt={breed}
          onError={e => {
            e.target.src = petTemlate;
          }}
          onWaiting={e => console.log('waiting:', e)}
        />
        <Button type="button" onClick={toggleFavourites}>
          {isFavourite ? <StyledFavouriteIcon /> : <StyledToFavouriteIcon />}
        </Button>
        {isPrivate && (
          <Button type="button" onClick={removePrivate}>
            <StyledDelete size="34px" />
          </Button>
        )}
      </ImgWrapper>
      <Title>{title}</Title>
      <About>
        <Description>
          <Text>Breed:</Text>
          <Text>{breed || '-'}</Text>
          <Text>Place:</Text>
          <Text>{location}</Text>
          <Text>Age:</Text>
          <Text>{age}</Text>
          {categoryName === 'sell' ? (
            <>
              <Text>Price:</Text>
              <Text>{price} $</Text>
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
        <Modal toggleModal={() => setShowModal(s => !s)} main>
          <ModalNotice
            petData={petData}
            favorite={isFavourite}
            toggleModal={() => setShowModal(s => !s)}
            toggleFavourites={toggleFavourites}
          />
        </Modal>
      )}
    </>
  );
};
