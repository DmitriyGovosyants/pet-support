import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const UserDataWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${theme.colors.bgSecond};
  border-radius: 20px;
  padding: 20px 0;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  ${device.tabletOnly} {
    position: absolute;
    left: 0px;
    border-radius: 0px 40px 40px 0px;
    padding: 0 40px 0 32px;
  }
`;
