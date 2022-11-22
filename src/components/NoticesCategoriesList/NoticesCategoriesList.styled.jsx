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
  display: flex;
  flex-direction: column;
  width: 280px;
  padding-bottom: 32px;
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

export const Error = styled.p`
  font-size: 24px;
  line-height: 1.375;
  ${device.tablet} {
    font-size: 36px;
  }
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
