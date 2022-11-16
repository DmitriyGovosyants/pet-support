import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const FriendsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  ${device.tablet} {
    font-size: ${p => p.theme.spacing(12)};
    grid-template-columns: repeat(2, 1fr);
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
