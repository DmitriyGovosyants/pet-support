import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';

export const UserDataTitle = styled.p`
  margin-bottom: 18px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;

  color: ${theme.colors.textMain};

  ${device.tablet} {
    padding-left: 32px;
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 1.36;
  }

  ${device.desktop} {
    padding-left: 16px;
    margin-bottom: 24px;
  }
`;

/**
 * Main wrapper styles
 */

export const UserWrapper = styled.div`
  ${device.tabletOnly} {
    display: flex;
    flex-direction: row-reverse;
  }

  ${device.desktop} {
    flex-direction: column;
  }
`;

export const UserCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px 0 84px 0;
  background-color: ${theme.colors.bgSecond};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);

  ${device.tablet} {
    border-radius: 0px 40px 40px 0px;
    padding: 0 40px 0 32px;
  }

  ${device.desktop} {
    width: 410px;
    padding: 20px 0 103px 0;
  }
`;
/**
 * Description block styles
 */

export const UserDescriptionWrapper = styled.ul`
  //був div
  padding: 0 16px;

  ${device.tablet} {
    width: 380px;
    padding: 40px 0 80px 0;
    margin-right: 52px;
  }

  ${device.desktop} {
    width: auto;
    padding: 0 16px;
    margin-right: 0;
  }
`;

/**
 * Avatar block styles
 */
export const AvatarPhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 88px;
  height: 22px;

  ${device.tablet} {
    position: absolute;
    bottom: 24px;
    right: 40px;
  }

  ${device.desktop} {
    top: 230px;
    right: 16px;
  }
`;
export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  padding: 0 25px;
  margin-bottom: 34px;

  ${device.tablet} {
    align-items: center;
    padding: 25px 0 55px 0;
    margin-bottom: 0;
  }

  ${device.desktop} {
    padding: 0 90px;
    margin-bottom: 34px;
  }
`;
export const Avatar = styled.img`
  width: 230px;
  height: 230px;
  margin-bottom: 12px;
  object-fit: cover;

  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  border-radius: 50%;

  ${device.tablet} {
    margin-bottom: 0;
  }
`;
export const InputFile = styled.input`
  /* display: none; */
`;
export const AvatarPhotoEditButton = styled.label`
  display: flex;
  align-items: center;
  width: 88px;
  height: 22px;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};
  cursor: pointer;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadLabel = styled.label`
  display: inline-block;
  padding: 4px 18px;

  height: 24px;
  width: 88px;
  padding: 4px 18px;

  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};

  white-space: normal;
  word-wrap: break-word;
  width: 100px;
  overflow: auto;

  background: ${theme.colors.bgMain};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 8px;

  cursor: pointer;
`;

export const ConfirmBtnAvatar = styled.button`
  width: 88px;
  height: 22px;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};
  cursor: pointer;
`;
