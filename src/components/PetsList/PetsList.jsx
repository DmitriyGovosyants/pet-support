import {
  PetsListStyled,
  PetItem,
  Image,
  ThumbText,
  HeadLine,
  Text,
  ButtonEdit,
  ButtonDelete,
} from './PetsList.styled';
import { ReactComponent as EditIcon } from 'data/img/edit-icon.svg';
import { ReactComponent as DeleteIcon } from 'data/img/fluent_delete-16-filled.svg';
import { useFetchPetsQuery } from 'redux/petApi';
import { useState } from 'react';
import { Modal, ModalDelete } from 'components';
const user = true; //временная заглушка

//удалить const pets, когда прийдут данные из бекенда
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
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  //раскоментить, когда прийдут данные из бекенда
  // const { data: pets } = useFetchPetsQuery();

  const [editPet, setEditPet] = useState('');

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
                <ButtonEdit
                  type="button"
                  onClick={() => setShowModalEdit(true)}
                >
                  <EditIcon />
                </ButtonEdit>

                <ButtonDelete
                  type="button"
                  onClick={() => setShowModalDelete(true)}
                >
                  <DeleteIcon />
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
              {showModalDelete && user && (
                <Modal toggleModal={() => setShowModalDelete(s => !s)}>
                  <ModalDelete
                    id={id}
                    closeModal={() => setShowModalDelete(false)}
                  />
                </Modal>
              )}
              {showModalEdit && user && (
                <Modal toggleModal={() => setShowModalEdit(s => !s)}>
                  {/* раскоментить когда появится компонент ModalEdit
                  <ModalEdit
                    id={id}
                    image={image}
                    name={name}
                    dateOfBirth={dateOfBirth}
                    breed={breed}
                    comments={comments}
                    closeModal={() => setShowModalDelete(false)}
                  /> */}
                </Modal>
              )}
            </PetItem>
          );
        })}
      </PetsListStyled>
    </>
  );
};
