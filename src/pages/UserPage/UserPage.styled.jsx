import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const UserDataWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${theme.colors.bgSecond};
  padding: 20px 0;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  ${device.tablet} {
    position: absolute;
    left: 0px;
    border-radius: 0px 40px 40px 0px;
    padding: 0 40px 0 32px;
  }

  ${device.desktop} {
    padding: 20px 16px 40px 16px;
  }
`;

export const UserDataTitle = styled.p`
  padding-top: 60px;
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.04em;

  color: #000000;

  ${device.tablet} {
    padding-top: 88px;
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 38px;
  }

  ${device.desktop} {
    padding-top: 58px;
    margin-bottom: 24px;
  }
`;
