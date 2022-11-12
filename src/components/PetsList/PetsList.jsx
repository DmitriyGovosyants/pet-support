import {
  PetsListStyled,
  PetItem,
  Image,
  ThumbText,
  HeadLine,
  Text,
  ButtonEdit,
  IconEdit,
  ButtonDelete,
} from './PetsList.styled';

//раскоментить, когда появится redux
// import { useFetchPetsQuery, useDeletePetMutation } from '../redux/pets/petApi';
import { useState } from 'react';
import { Modal } from 'components';

const pets = [
  {
    id: '1',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name: 'Jack',
    dateOfBirth: '22.04.2018',
    breed: '22.04.2018',
    comments:
      'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: '2',
    image: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    name: 'Nick',
    dateOfBirth: '25.04.2018',
    breed: '25.04.2018',
    comments:
      'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
];

export const PetsList = () => {
  const [showModal, setShowModal] = useState(false);
  //раскоментить, когда появится redux
  // const { data: pets } = useFetchPetsQuery();
  // const [deletePet] = useDeletePetMutation();
  // const [editPet, setEditPet] = useState('');

  const handleEditPet = () => {
    const newCont = {
      id: pets.id,
      image: pets.image,
      name: pets.name,
      dateOfBirth: pets.dateOfBirth,
      breed: pets.breed,
      comments: pets.comments,
    };

    // setEditContact(newCont);
    console.log('edit');
    setShowModal(true);
  };

  return (
    <>
      <PetsListStyled>
        {pets.map(({ id, image, name, dateOfBirth, breed, comments }) => {
          return (
            <PetItem key={id} id={id}>
              <Image>
                <img src={image} alt="pet" />
              </Image>
              <ThumbText>
                <button>{/* <IconEditSvg /> */}</button>
                <ButtonEdit type="button" onClick={handleEditPet}>
                  Edit
                  <IconEdit>
                    {/* <use href="./data/img/icon.svg#icon-menu-open"></use> */}
                  </IconEdit>
                </ButtonEdit>

                {/*
                если будет функционал по изменению петов и будет реализована модалка ModalEditPet {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ModalEditPet toggleModal={() => setShowModal(s => !s)} />
        </Modal>
      )} */}
                <ButtonDelete
                  type="button"
                  onClick={
                    () =>
                      //заменить console.log("delete") на deletePet(id), когда повится useDeletePetMutation
                      console.log('delete')
                    // deletePet(id)
                  }
                >
                  Delete
                  <IconEdit>
                    <use href="./icon.svg#icon-menu-open"></use>
                  </IconEdit>
                </ButtonDelete>
                <Text>
                  <HeadLine>Name: </HeadLine>
                  {name}
                </Text>
                <Text>
                  <HeadLine>Date of birth: </HeadLine>
                  {dateOfBirth}
                </Text>
                <Text>
                  <HeadLine>Breed: </HeadLine>
                  {breed}
                </Text>
                <Text>
                  <HeadLine>Comments: </HeadLine>
                  {comments}
                </Text>
              </ThumbText>
            </PetItem>
          );
        })}
      </PetsListStyled>
    </>
  );
};
