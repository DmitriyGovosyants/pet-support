import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const UserDataWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 0 84px 0;
  background-color: ${theme.colors.bgSecond};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  ${device.tablet} {
    border-radius: 0px 40px 40px 0px;
    padding: 0 40px 0 32px;
    margin-left: -32px;
  }

  ${device.desktop} {
    width: 410px;
    padding: 20px 0 103px 0;
    margin-left: -16px;
  }
`;

export const UserDataTitle = styled.p`
  padding-top: 60px;
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: ${theme.colors.textMain};

  ${device.tablet} {
    padding-top: 88px;
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 1.36;
  }

  ${device.desktop} {
    padding-top: 58px;
    margin-bottom: 24px;
  }
`;
