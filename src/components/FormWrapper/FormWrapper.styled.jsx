import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Wrapper = styled.div`
  position: relative;
  padding-top: 42px;
  ${device.tablet} {
    margin-top: 173px;
    margin-left: auto; 
    margin-right: auto;
    padding: 50px 80px;
    width: 608px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
  }
  ${device.desktop} {
    width: 618px;
    margin-top: 91px;
  }
`;
