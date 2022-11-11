import styled from '@emotion/styled';
import { theme } from 'styles';

export const UserInfoWrapper = styled.div`
  margin-bottom: 42px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 160px;
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 20px;
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 35px;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 230px;
  background-color: tomato;
  border-radius: 50%;
  margin-bottom: 12px;
`;

// export const AvatarButton = styled.button`
//   display: flex;
//   align-items: flex-end;
// `;
export const Title = styled.p`
  color: ${theme.colors.accent};
`;

export const EditButton = styled.button`
  background-color: ${theme.colors.accent};
`;
