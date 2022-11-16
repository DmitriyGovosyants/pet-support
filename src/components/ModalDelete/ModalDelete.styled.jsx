import styled from '@emotion/styled';
import { ReactComponent as Close } from 'data/img/close-icon.svg';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  padding: 60px 20px 40px;
  box-shadow: rgb(199 123 27) 3px 3px 10px, rgb(199 123 27) -3px -3px 10px;
  background-color: ${props => props.theme.colors.bgSecond};
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonClose = styled.button`
  display: flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: ${props => props.theme.colors.bgMain};

  position: absolute;
  top: 15px;
  right: 15px;

  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const CloseIcon = styled(Close)`
  fill: currentColor;
`;

export const TittleModal = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.375;
  margin-bottom: 20px;
`;

export const ButtonDel = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 11px 0;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 40px;
  color: ${props => props.theme.colors.bgSecond};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const ButtonCancel = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 9px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  background-color: ${props => props.theme.colors.bgSecond};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  color: #111111;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};
  }
`;
