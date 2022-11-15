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

export const Image = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;

  ${device.tablet} {
    width: 161px;
    height: 161px;
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

export const ButtonEdit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: inherit;
  color: #111111;
  fill-opacity: 0.6;
  backdrop-filter: blur(2px);

  position: absolute;
  right: 30px;
  top: -3px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${device.tablet} {
    width: 44px;
    height: 44px;
    background-color: #fdf7f2;

    right: 50px;
    top: 0;
  }

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: inherit;
  color: #111111;
  fill-opacity: 0.6;
  backdrop-filter: blur(2px);

  position: absolute;
  right: 0;
  top: -3px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${device.tablet} {
    width: 44px;
    height: 44px;
    background-color: #fdf7f2;

    right: 0;
    top: 0;
  }

  :hover,
  :focus {
    color: ${props => props.theme.colors.accent};
  }
`;
