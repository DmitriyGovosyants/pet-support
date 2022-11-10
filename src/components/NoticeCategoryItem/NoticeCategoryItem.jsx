import { useState } from 'react';
import { Modal, NoticeModal } from 'components';

export const NoticeCategoryItem = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>NoticeCategoryItem</div>
      <button type="button" onClick={() => setShowModal(true)}>
        OPEN MODAL
      </button>
      {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <NoticeModal toggleModal={() => setShowModal(s => !s)} />
        </Modal>
      )}
    </>
  );
};
