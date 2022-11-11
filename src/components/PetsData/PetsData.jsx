import { useState } from 'react';
import { Modal, PetsList, AddPet } from 'components';
import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

const ThumbText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};

  ${`${device.tabletOnly} {
    font-weight: 500;
    font-size: 28px;
  }`}
`;

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
