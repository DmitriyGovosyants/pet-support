import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';
import imageURL from '../../data/img/img5.jpg';

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

/**
 * Avatar block styles
 */

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

  background: url(${imageURL || ''});
  background-position: 50% 50%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  border-radius: 50%;

  ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const AvatarPhotoEditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 88px;
  height: 22px;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};
  cursor: pointer;

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

/**
 * Description block styles
 */

export const UserDescriptionWrapper = styled.div`
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

export const UserDescriptionItemWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 8px;

    ${device.tabletOnly} {
      margin-bottom: 12px;
    }
  }
`;

export const UserDescriptionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};

  ${device.tablet} {
    font-size: 18px;
    line-height: 1.39;
  }
`;

/**
 * Basic data and editability
 */

export const BasicUserDataWrapper = styled.div`
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

export const BasicUserDataTitle = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};

  ${device.tablet} {
    font-size: 18px;
    line-height: 1.39;
  }
`;
export const BasicUserDataEditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background-color: ${theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;

  ${device.tablet} {
    width: 32px;
    height: 32px;
    margin-left: 24px;
  }
`;

/**
 * Form styles
 */

export const UserForm = styled.form`
  display: flex;
  align-items: center;
`;

export const UserFormInput = styled.input`
  display: flex;
  align-items: center;
  width: 160px;
  height: 24px;
  padding: 4px 18px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: ${theme.colors.textMain};

  background: ${theme.colors.bgMain};
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  ${device.tablet} {
    width: 216px;
    height: 32px;
    padding: 4px 12px;
    font-size: 18px;
    line-height: 1.39px;
  }
`;

export const UserFormSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  background-color: ${theme.colors.bgMain};
  border-radius: 50%;
  cursor: pointer;

  ${device.tablet} {
    width: 32px;
    height: 32px;
    margin-left: 24px;
  }
`;
