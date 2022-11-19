import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const FriendsList = styled.ul`
  display: grid;
  gap: ${props => props.theme.spacing(3)};

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing(8)};
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
