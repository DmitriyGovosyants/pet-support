import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Section = styled.section`
  padding-top: 31px;
  ${device.tablet} {
    padding-top: 72px;
  }
  ${device.desktop} {
    padding-top: 41px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;

  font-size: 24px;
  font-weight: 700;
  line-height: 1.375;
  text-align: center;

  ${device.tablet} {
    margin-bottom: 45px;
    font-size: 48px;
  }

  ${device.desktop} {
    margin-bottom: 60px;
  }
`;
