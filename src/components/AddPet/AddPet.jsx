import { useState } from 'react';
import { ModalAddsPet } from 'components';
import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

const ThumbButton = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  ${`${device.tabletOnly} {
    display: none;
  }`}
  ${`${device.desktop} {
    margin-right:16px;
  }`}
`;

const TextButton = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};
`;

// -------- когда появится ThemeProvider, заменить в кнопке ----------
// background-color: ${props =>
//   props.isPrimary ? props.theme.color.primary : props.theme.color.secondary
// };

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: ${theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover,
  &:focus {
    background-color: ${theme.colors.hover};
  }
`;

const ContentButton1 = styled.div`
  height: 2px;
  width: 18px;
  border-radius: 50px;
  background-color: ${theme.colors.bgSecond};
  position: absolute;
`;

const ContentButton2 = styled.div`
  height: 18px;
  width: 2px;
  border-radius: 50px;
  background-color: ${theme.colors.bgSecond};
  position: absolute;
`;

export const AddPet = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const user = true; //временная заглушка

  return (
    <>
      <ThumbButton>
        <TextButton>Add pet</TextButton>
        <Button type="button" onClick={() => setShowModal(true)} isPrimary>
          <ContentButton1 />
          <ContentButton2 />
        </Button>
      </ThumbButton>
      {showModal && user && (
        <ModalAddsPet toggleModal={() => setShowModal(s => !s)}>
          <div>ADD PET MODAL</div>
          <button type="button" onClick={() => setShowModal(false)}>
            CLOSE MODAL
          </button>
        </ModalAddsPet>
      )}
    </>
  );
};
