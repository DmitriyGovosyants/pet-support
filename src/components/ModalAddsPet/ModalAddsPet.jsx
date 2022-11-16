import { useEffect, useState } from 'react';
import { ModalAdd1 } from './ModalAdd1';
import { ModalAdd2 } from './ModalAdd2';
import {
  AddModalWrap,
  AddModal,
  ButtonClose,
  CloseIcon
} from './ModalAddsPets.styled';

export const ModalAddsPet = ({ toggleModal }) => {
  const [page, setPage] = useState(1);
  const [modal1Values, setModal1Values] = useState({
    name: '',
    birthday: '',
    breed: '',
  });
  const [modal2Values, setModal2Values] = useState({
    comments: '',
    avatar: '',
  });

  const takesInputeValues = data => {
    setModal1Values(data);
  };

  useEffect(() => {
    if ( toggleModal(true)) {
      setPage(1);
      setModal1Values({
        name: '',
        birthday: '',
        breed: '',
      });

      setModal2Values({
        comments: '',
        avatar: '',
      });
    }
  }, [toggleModal]);

  const createPetsPost = data => {
    const formData = new FormData();
    formData.append('name', modal1Values.name);
    formData.append('birthday', modal1Values.birthday);
    formData.append('breed', modal1Values.breed);
    formData.append('comments', data.comments);
    formData.append('avatar', data.file);
  };

  return (
    <>
      <AddModalWrap>
        <ButtonClose type="button" onClick={() =>  toggleModal()}>
          <CloseIcon />
        </ButtonClose>
        <AddModal>
          {page === 1 && (
            <ModalAdd1
              toggleModal={toggleModal}
              setPage={setPage}
              createPetsPost={takesInputeValues}
              modalDefaultValues={modal1Values}
            />
          )}
          {page === 2 && (
            <ModalAdd2
              setPage={setPage}
              createPetsPost={createPetsPost}
              toggleModal={toggleModal}
              setModal2Values={setModal2Values}
              modalDefaultValues={modal2Values}
            />
          )}
        </AddModal>
      </AddModalWrap>
    </>
  );
};