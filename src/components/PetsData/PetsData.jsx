import { useState } from 'react';
import { Modal, ModalAddsPet, PetsList } from 'components';

export const PetsData = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>PetsData</div>
      <button type="button" onClick={() => setShowModal(true)}>
        ADD PET
      </button>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ModalAddsPet toggleModal={() => setShowModal(s => !s)} />
        </Modal>
      )}
      <PetsList />
    </>
  );
};
