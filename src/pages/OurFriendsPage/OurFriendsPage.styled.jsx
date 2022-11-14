import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Section = styled.section`
  padding-top: ${p => p.theme.spacing(10.5)};
  ${device.tablet} {
    padding-top: ${p => p.theme.spacing(23)};
  }
  ${device.desktop} {
    padding-top: ${p => p.theme.spacing(15)};
  }
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.spacing(7)};
  text-align: center;
  font-weight: 700;
  font-size: ${p => p.theme.spacing(6)};
  line-height: 1.375;
  ${device.tablet} {
    margin-bottom: ${p => p.theme.spacing(10)};
    font-size: ${p => p.theme.spacing(12)};
  }
`;

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: ${p => p.theme.spacing(7.5)};
  ${device.mobileOnly} {
    position: relative;
  }
  ${device.tablet} {
    margin-bottom: ${p => p.theme.spacing(15)};
  }
`;
