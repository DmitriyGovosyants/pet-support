import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const UserWrapper = styled.div`
  ${device.tabletOnly} {
    display: flex;
    flex-direction: row-reverse;
  }
`;
export const UserInfoWrapper = styled.div`
  margin-bottom: 42px;
  padding: 0 14px;

  ${device.tabletOnly} {
    width: 380px;
    padding: 40px 0 80px 0;
    margin-bottom: 0;
    margin-right: 52px;
  }
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

  ${device.tabletOnly} {
    min-width: 260px;
  }
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 25px;
  margin-bottom: 35px;

  ${device.tabletOnly} {
    padding: 25px 0;
    margin-bottom: 0;
  }
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
  width: 160px;
  height: 24px;
  margin-right: 10px;
  padding: 4px 18px;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  ${device.tabletOnly} {
    width: 260px;
    margin-right: 24px;
  }
`;
