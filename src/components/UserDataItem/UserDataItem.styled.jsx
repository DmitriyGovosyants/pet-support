import styled from '@emotion/styled';
import { theme } from 'styles';

export const UserInfoWrapper = styled.div`
  margin-bottom: 42px;
  padding: 0 14px;
`;
export const ItemWrapper = styled.div`
  display: flex;
  height: 24px;
  margin-bottom: 8px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
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
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 35px;
`;
export const Avatar = styled.img`
  width: 230px;
  height: 230px;
  background-color: tomato;
  border-radius: 50%;
  margin-bottom: 12px;
`;
export const EditAvatarButton = styled.button`
  display: flex;
  justify-content: flex-end;
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

export const FormChangeUserInfo = styled.form`
  display: flex;
  justify-content: flex-end;
`;

export const InputChangeUserInfo = styled.input`
  width: 159px;
  height: 24px;
  margin-right: 10px;
  padding: 4px 18px;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
`;
