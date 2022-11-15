import {
  PetItemStyled,
  Image,
  ThumbText,
  HeadLine,
  Text,
  ButtonEdit,
  ButtonDelete,
} from './PetItem.styled';
import { ReactComponent as EditIcon } from 'data/img/edit-icon.svg';
import { ReactComponent as DeleteIcon } from 'data/img/fluent_delete-16-filled.svg';
import { Modal, ModalDelete, PetsInterfaceButton } from 'components';
import { useState } from 'react';

export const PetItem = ({ id, image, name, dateOfBirth, breed, comments }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  //   const [editPet, setEditPet] = useState('');
  const user = true; //временная заглушка

  return (
    <>
      <PetItemStyled>
        <Image>
          <img src={image} alt="pet" />
        </Image>
        <ThumbText>
          <ul>
            <li>
              <PetsInterfaceButton>
                <EditIcon />
              </PetsInterfaceButton>
            </li>

            {/* <li>
              <ButtonEdit type="button" onClick={() => setShowModalEdit(true)}>
                <EditIcon />
              </ButtonEdit>
            </li> */}
            <li>
              <ButtonDelete
                type="button"
                onClick={() => setShowModalDelete(true)}
              >
                <DeleteIcon />
              </ButtonDelete>
            </li>
          </ul>

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
            <ModalDelete id={id} closeModal={() => setShowModalDelete(false)} />
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
      </PetItemStyled>
    </>
  );
};
