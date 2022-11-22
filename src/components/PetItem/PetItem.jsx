import {
  PetItemStyled,
  ThumbImage,
  Image,
  InfoList,
  InfoRow,
  Info,
  ListButton,
} from './PetItem.styled';
import { ReactComponent as EditIcon } from 'data/img/edit-icon.svg';
import { ReactComponent as DeleteIcon } from 'data/img/fluent_delete-16-filled.svg';
import dogImage from 'data/img/dog.png';
import {
  Modal,
  ModalEditPet,
  ModalDelete,
  PetsInterfaceButton,
} from 'components';
import { useState } from 'react';

export const PetItem = ({ id, image, name, dateOfBirth, breed, comments }) => {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const addDefaultSrc = ev => {
    ev.target.src = dogImage;
  };

  return (
    <PetItemStyled>
      <ThumbImage>
        <Image
          width={'161px'}
          onError={addDefaultSrc}
          src={image || dogImage}
          alt="pet"
        />
      </ThumbImage>
      <InfoList>
        <li>
          <InfoRow>
            Name: <Info>{name}</Info>
          </InfoRow>
        </li>
        <li>
          <InfoRow>
            Date of birth: <Info>{dateOfBirth}</Info>
          </InfoRow>
        </li>
        <li>
          <InfoRow>
            Breed: <Info>{breed}</Info>
          </InfoRow>
        </li>
        <li>
          <InfoRow>
            Comments: <Info>{<Info>{comments}</Info>}</Info>
          </InfoRow>
        </li>
        <ListButton>
          <li>
            <PetsInterfaceButton
              type="button"
              onClick={() => setShowModalEdit(true)}
            >
              <EditIcon />
            </PetsInterfaceButton>
          </li>
          <li>
            <PetsInterfaceButton
              type="button"
              onClick={() => setShowModalDelete(true)}
            >
              <DeleteIcon />
            </PetsInterfaceButton>
          </li>
        </ListButton>
      </InfoList>
      {showModalDelete && (
        <Modal toggleModal={() => setShowModalDelete(s => !s)}>
          <ModalDelete id={id} closeModal={() => setShowModalDelete(false)} />
        </Modal>
      )}
      {showModalEdit && (
        <Modal toggleModal={() => setShowModalEdit(s => !s)}>
          <ModalEditPet
            id={id}
            image={image}
            name={name}
            birthdate={dateOfBirth}
            breed={breed}
            comments={comments}
            closeModal={() => setShowModalEdit(false)}
          />
        </Modal>
      )}
    </PetItemStyled>
  );
};
