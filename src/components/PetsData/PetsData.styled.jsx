import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const PetsDataStyled = styled.div`
  ${device.desktop} {
    display: flex;
    flex-direction: column;
  }
`;

export const ThumbText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};

  ${device.tabletOnly} {
    font-weight: 500;
    font-size: 28px;
  }
`;
