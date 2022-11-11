import { useState } from 'react';
import { Modal } from 'components';

export const AddPet = () => {
  const [showModal, setShowModal] = useState(false);
  const user = true; //временная заглушка

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        ADD PET
      </button>
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
