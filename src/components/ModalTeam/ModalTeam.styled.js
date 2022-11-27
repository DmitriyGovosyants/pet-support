import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';

export const TeamTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: ${p => p.theme.spacing(10)};
  line-height: 1.375;

  ${device.tablet} {
    font-size: ${p => p.theme.spacing(12)};
  }
`;

export const TeamList = styled.ul`
  display: grid;
  gap: ${p => p.theme.spacing(3)};
  margin-top: ${p => p.theme.spacing(15)};

  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    gap: ${p => p.theme.spacing(8)};
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TeamItem = styled.li`
  background-color: ${p => p.theme.colors.bgSecond};
  border-radius: ${p => p.theme.spacing(5)};

  ${device.tablet} {
    padding: ${p => p.theme.spacing(4)};
    border-radius: ${p => p.theme.spacing(10)};
  }
`;

export const ImgTeam = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: ${p => p.theme.spacing(5)};
  width: ${p => p.theme.spacing(100)};
  padding-top: 10px;

  ${device.tablet} {
    width: 450px;
    border-radius: ${p => p.theme.spacing(10)};
  }
  ${device.desktop} {
    width: ${p => p.theme.spacing(125)};
    border-radius: ${p => p.theme.spacing(10)};
  }
`;

export const NameMemberTeam = styled.p`
  text-align: center;
`;

export const Position = styled.p`
  text-align: center;
  font-size: ${p => p.theme.spacing(9)};
`;

export const WrapperSocial = styled.div`
  display: flex;
  justify-content: center;
`;

export const SocialLink = styled.a`
  text-align: center;
  width: ${p => p.theme.spacing(5)};
`;
