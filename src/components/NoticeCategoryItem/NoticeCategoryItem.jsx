import { useState } from 'react';
import { Modal, ModalNotice } from 'components';

export const NoticeCategoryItem = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>NoticeCategoryItem</div>
      <button type="button" onClick={() => setShowModal(true)}>
        LEARNMORE
      </button>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ModalNotice toggleModal={() => setShowModal(s => !s)} />
        </Modal>
      )}
    </>
  );
};
