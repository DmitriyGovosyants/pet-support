import styled from '@emotion/styled';
// import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const UserPageWrapper = styled.div`
  padding-top: 60px;

  ${device.tablet} {
    padding-top: 88px;
  }

  ${device.desktop} {
    display: flex;
    padding-top: 58px;
  }
`;

export const UserDataWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  ${device.tablet} {
    margin-left: -32px;
    margin-bottom: 20px;
  }
  ${device.desktop} {
    margin-left: -16px;
  }
`;
