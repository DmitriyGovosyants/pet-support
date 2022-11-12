import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const PetsListStyled = styled.div`
  display: flex;
  gap: 20px;
`;

export const PetItem = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  ${`${device.tablet} {
    flex-direction: row;
    gap: 32px;
  }`}
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
`;

export const HeadLine = styled.p`
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
