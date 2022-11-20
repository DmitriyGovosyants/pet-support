import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Title = styled.h1`
  margin-bottom: 28px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  ${device.tablet} {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;

export const Section = styled.section`
  padding-top: 42px;
  padding-bottom: 100px;
  ${device.tablet} {
    padding-top: 92px;
  }
  ${device.desktop} {
    padding-top: 59px;
    padding-bottom: 200px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 30px;
  ${device.mobileOnly} {
    position: relative;
  }
  ${device.tablet} {
    margin-bottom: 60px;
  }
`;
