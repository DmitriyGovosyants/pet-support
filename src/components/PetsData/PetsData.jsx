import { useState } from 'react';
import { Modal, PetsList, AddPet } from 'components';

import { ThumbText, Text } from './PetsData.styled';

export const PetsData = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>PetsData</div>
      <ThumbText>
        <Text>My pets:</Text>
        <AddPet />
      </ThumbText>
      {/* {showModal && (
        <Modal toggleModal={() => setShowModal(s => !s)}>
          <ModalAddsPet toggleModal={() => setShowModal(s => !s)} />
        </Modal>
      )} */}
      <PetsList />
    </>
  );
};
