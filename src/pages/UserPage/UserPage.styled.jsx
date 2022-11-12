import styled from '@emotion/styled';
import { theme } from 'styles';

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: ${theme.colors.bgSecond};
  border-radius: 20px;
  padding: 20px 0;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
`;
