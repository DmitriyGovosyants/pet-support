import { useState } from 'react';
import { Modal, ModalAddNotice } from 'components';
import {
  Button,
  Wrapper,
  Text,
  StyledPlusIcon,
} from './AddNoticeButton.styled';
import { useAuth } from 'redux/useAuth';
import { toast } from 'react-toastify';

export const AddNoticeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const auth = useAuth();

  const onClickHandler = () => {
    if (!auth.user) {
      toast.warn('You must sign in for add notices!');
      return;
    }
    setShowModal(true);
  };
  return (
    <>
      <Wrapper>
        <Text>Add pet</Text>
        <Button type="button" onClick={onClickHandler}>
          <StyledPlusIcon />
        </Button>
      </Wrapper>
      {showModal && auth.user && (
        <Modal toggleModal={() => setShowModal(s => !s)} main>
          <ModalAddNotice toggleModal={() => setShowModal(s => !s)} />
        </Modal>
      )}
    </>
  );
};
