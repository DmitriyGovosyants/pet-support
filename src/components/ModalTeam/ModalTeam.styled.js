import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const TeamTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 40px;
  line-height: 1.375;

  ${device.tablet} {
    font-size: 50px;
  }
`;

export const TeamList = styled.ul`
  display: grid;
  gap: 12px;
  margin-top: 60px;

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TeamItem = styled.li`
  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: 20px;

  ${device.tablet} {
    padding: 16px;
    border-radius: 40px;
  }
`;

export const ImgTeam = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
  width: 400px;
  padding-top: 10px;

  ${device.tablet} {
    width: 450px;
    border-radius: 40px;
  }
  ${device.desktop} {
    width: 500px;
    border-radius: 40px;
  }
`;

export const NameMemberTeam = styled.p`
  text-align: center;
`;

export const Position = styled.p`
  text-align: center;
  font-size: 36px;
`;

export const WrapperSocial = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialLink = styled.a`
  text-align: center;
  width: 20px;
`;
