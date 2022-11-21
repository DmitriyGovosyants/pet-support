import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  margin-top: 40px;
  ${device.mobileOnly} {
    margin-right: 17px;
    margin-left: 17px;
  }
`;

export const Button = styled.div`
  margin-top: 16px;
`;

export const EyeBtn = styled.button`
position: absolute;
right: 0;
cursor: pointer;
${device.mobileOnly} {
  top: 175px;
  right: 40px;
}
${device.tablet} {
  top: 215px;
  right: 100px;
}
`;

export const EyeConfBtn = styled.button`
position: absolute;
right: 0;
cursor: pointer;
${device.mobileOnly} {
  top: 230px;
  right: 40px;
}
${device.tablet} {
  top: 285px;
  right: 100px;
}
`;