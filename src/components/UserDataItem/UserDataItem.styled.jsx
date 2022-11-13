import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const UserWrapper = styled.div`
  ${device.tabletOnly} {
    display: flex;
    flex-direction: row-reverse;
  }

  ${device.desktop} {
    flex-direction: column;
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

  ${device.tablet} {
    margin-bottom: 12px;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;

  ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 190px;
  padding-left: 19px;

  ${device.tablet} {
    width: 272px;
    padding-left: 13px;
  }
  ${device.desktop} {
    width: 272px;
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

  ${device.desktop} {
    padding: 0 90px;
  }
`;
export const Avatar = styled.img`
  width: 230px;
  height: 230px;
  background-color: tomato;
  border-radius: 50%;
  margin-bottom: 12px;
`;
export const ButtonPhotoEdit = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
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
  align-items: center;
  /* 
  ${device.desktop} {
    width: 272px;
  } */
`;

export const InputChangeUserInfo = styled.input`
  height: 24px;
  /* margin-right: 10px; */
  padding: 4px 18px;
  width: 160px;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;

  ${device.tablet} {
    height: 24px;
    width: 216px;
    font-size: 18px;
    line-height: 25px;
    padding: 4px 12px;
  }
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background-color: ${theme.colors.bgMain};
  border-radius: 50%;

  ${device.tablet} {
    width: 32px;
    height: 32px;
    margin-left: 24px;
  }
`;

export const UserInfoTitle = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;

  ${device.tablet} {
    font-size: 18px;
    line-height: 25px;
  }
`;
