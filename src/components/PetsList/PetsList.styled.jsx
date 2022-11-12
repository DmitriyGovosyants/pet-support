import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const PetsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PetItem = styled.li`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  transform: scale(1.01);

  ${`${device.tablet} {
    flex-direction: row;
    gap: 32px;
  }`}

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

  ${`${device.tablet} {
    width: 161px;
    height: 161px;
  }`}
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

  ${`${device.tablet} {
    font-size: 16px;
  }`}
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
  width: 60px;
  height: 20px;
  color: black;
  border: 1px solid black;

  position: absolute;
  right: 100px;
`;

export const IconEdit = styled.svg`
  fill: currentColor;
  width: 20px;
  height: 20px;
`;

export const ButtonDelete = styled.button`
  display: flex;
  width: 60px;
  height: 20px;
  color: black;
  border: 1px solid black;

  position: absolute;
  right: 10px;
`;
