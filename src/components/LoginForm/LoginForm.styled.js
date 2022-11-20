import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  margin-top: 40px;
  ${device.mobileOnly} {
    margin-right: 17px;
    margin-left: 17px;
  }
`;
