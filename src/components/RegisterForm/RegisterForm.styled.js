import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  margin-top: 40px;
  ${device.mobileOnly} {
    margin-right: 17px;
    margin-left: 17px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`

export const Button = styled.div`
  margin-top: 16px;
`;

export const EyeBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
  cursor: pointer;

  ${device.tablet} {
    top: 15px;
    right: 20px;
  }
`;