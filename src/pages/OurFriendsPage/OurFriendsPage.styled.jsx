import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Section = styled.section`
  padding: 31px 0;
  ${device.tablet} {
    padding: 72px 0;
  }
  ${device.desktop} {
    padding: 41px 0;
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
