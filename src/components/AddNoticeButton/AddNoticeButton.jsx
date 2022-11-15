import { useState } from 'react';
import { Modal } from 'components';
import {
  Button,
  Wrapper,
  Text,
  StyledPlusIcon,
} from './AddNoticeButton.styled';

export const AddNoticeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const user = true; //временная заглушка
  return (
    <>
      <Wrapper>
        <Text>Add pet</Text>
        <Button type="button" onClick={() => setShowModal(true)}>
          <StyledPlusIcon />
        </Button>
      </Wrapper>
      {showModal && user && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <div>ADD PET MODAL</div>
          <button type="button" onClick={() => setShowModal(false)}>
            CLOSE MODAL
          </button>
        </Modal>
      )}
    </>
  );
};
