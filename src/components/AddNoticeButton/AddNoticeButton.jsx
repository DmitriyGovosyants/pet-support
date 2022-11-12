import { useState } from 'react';
import { Modal } from 'components';
import { ReactComponent as PlusIcon } from 'data/img/plus-icon.svg';
import { Button, Wrapper, Text } from './AddNoticeButton.styled';

export const AddNoticeButton = () => {
  const [showModal, setShowModal] = useState(false);
  const user = true; //временная заглушка

  return (
    <>
      <Wrapper>
        <Text>Add pat</Text>
        <Button type="button" onClick={() => setShowModal(true)}>
          <PlusIcon />
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
