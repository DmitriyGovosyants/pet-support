import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Section = styled.section`
  padding-top: ${props => props.theme.spacing(7.75)};

  ${device.tablet} {
    padding-top: ${props => props.theme.spacing(18)};
  }

  ${device.desktop} {
    padding-top: ${props => props.theme.spacing(10.25)};
  }
`;

export const Title = styled.h1`
  margin-bottom: ${props => props.theme.spacing(10)};

  font-size: ${props => props.theme.spacing(6)};
  font-weight: 700;
  line-height: 1.375;
  text-align: center;

  ${device.tablet} {
    margin-bottom: ${props => props.theme.spacing(11.25)};
    font-size: ${props => props.theme.spacing(12)};
  }

  ${device.desktop} {
    margin-bottom: ${props => props.theme.spacing(15)};
  }
`;
