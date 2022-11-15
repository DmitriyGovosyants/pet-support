import styled from '@emotion/styled';
import { theme } from 'styles';
import { device } from 'styles/mediaquery';
import imageURL from '../../data/img/team-img2-tab.jpg';

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
