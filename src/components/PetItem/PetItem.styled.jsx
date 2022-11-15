import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const PetItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  ${device.tablet} {
    flex-direction: row;
    gap: 32px;
  }

  ${device.desktop} {
    padding-right: 28px;
  }

  background: #ffffff;

  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  transform: scale(1.01);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1);
    4px 1px 11px rgb(0 0 0 / 11%)
  }
`;

export const ThumbImage = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;

  ${device.tablet} {
    width: 161px;
    height: 161px;
  }
`;

export const Image = styled.img`
  width: 100%;
  ${device.tablet} {
    min-width: 161px;
  }
`;

export const ThumbText = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  position: relative;
`;

export const HeadLine = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #000000;

  ${device.tablet} {
    font-size: 16px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #000000;
`;

export const ListButton = styled.ul`
  display: flex;
  gap: 15px;
  position: absolute;
  top: -3px;
  right: 0;
  ${device.tablet} {
    top: 0;
    right: 0;
  }
`;
