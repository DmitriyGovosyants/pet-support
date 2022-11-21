import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const Container = styled.div`
  position: relative;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: 280px;
  padding: 60px 20px 40px;

  background-color: ${props => props.theme.colors.bgSecond};
  border-radius: 20px;

  ${device.tablet} {
    top: 50%;
    transform: translate(-50%, -50%);

    width: 704px;
    padding: 32px 20px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;

  border-radius: 50%;
  cursor: pointer;
  background-color: ${props => props.theme.colors.bgMain};
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
  }

  ${device.tablet} {
    top: 12px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;

  width: 240px;
  height: 240px;
  margin-bottom: 16px;

  border-radius: 0px 0px 40px 40px;
  overflow: hidden;

  ${device.tablet} {
    width: 288px;
    height: 328px;
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  ${device.tablet} {
    object-fit: cover;
    height: 100%;
  }
`;

export const CategoryMark = styled.span`
  position: absolute;
  top: 20px;
  left: 0;

  display: flex;
  align-items: center;
  min-height: 28px;
  min-width: 158px;
  padding-left: 20px;

  font-size: 12px;
  line-height: 1.375;
  letter-spacing: 0.04em;

  background-color: ${props => props.theme.colors.btnTransperent};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  letter-spacing: -0.01em;

  ${device.tablet} {
    margin-bottom: 20px;

    font-size: 28px;
    line-height: 1.35;
  }
`;

export const FeaturesList = styled.ul`
  margin-bottom: 28px;

  ${device.tablet} {
    margin-bottom: 0;
  }
`;

export const FeaturesItem = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const FeaturesDescription = styled.p`
  min-width: 118px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.35;
  color: ${props => props.theme.colors.black};

  ${device.tablet} {
    min-width: 120px;

    font-size: 16px;
    line-height: 1.5;
  }
`;

export const FeaturesDefinition = styled.p`
  font-size: 14px;
  line-height: 1.35;
  color: ${props => props.theme.colors.black};

  ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ContactLink = styled.a`
  font-size: 14px;
  line-height: 1.35;
  color: ${props => props.theme.colors.black};

  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  ${device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  min-height: 40px;
  margin-bottom: 12px;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.textSecond};
  text-align: center;

  background-color: ${props => props.theme.colors.accent};
  border-radius: 40px;
  transition: background-color 250ms linear;

  ${device.tablet} {
    width: 160px;
    margin-right: 20px;
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const ChangeFavoriteStatusBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  min-height: 40px;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: ${props => props.theme.colors.textMain};

  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 40px;
  cursor: pointer;
  transition: border-color 250ms linear;

  & > svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;

    fill: ${props => props.theme.colors.accent};
    transition: fill 250ms linear;
  }

  ${device.tablet} {
    width: 160px;
    margin-right: 12px;
  }

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.hover};

    & > svg {
      fill: ${props => props.theme.colors.hover};
    }
  }
`;

export const FeaturesWrapper = styled.div``;

export const Wrapper = styled.div`
  & + p {
    margin-bottom: 40px;
  }

  ${device.tablet} {
    display: flex;
    margin-bottom: 28px;

    & + p {
      margin-bottom: 32px;
    }
  }
`;

export const BtnWrapper = styled.div`
  ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
  }
`;
