import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${device.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  width: 280px;
  border-radius: 0px 0px 20px 20px;
  background: ${props => props.theme.colors.textSecond};
  box-shadow: 7px 4px 14px ${props => props.theme.colors.shadow};
  ${device.tablet} {
    width: 336px;
    border-radius: 0px 0px 40px 40px;
  }
  ${device.desktop} {
    width: 288px;
  }
`;
