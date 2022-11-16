import styled from '@emotion/styled';
// import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const LogoutButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 20px;
  display: flex;
  align-items: center;
  width: 90px;
  height: 22px;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.39;
  letter-spacing: 0.04em;
  cursor: pointer;

  color: rgba(17, 17, 17, 0.6);

  ${device.tablet} {
    left: 32px;
    bottom: 24px;
  }

  ${device.desktop} {
    left: 16px;
    bottom: 40px;
  }
`;
