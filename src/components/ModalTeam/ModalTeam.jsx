import { Container } from 'components';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import team from '../../data/json/team.json';
import {
  TeamList,
  TeamItem,
  TeamTitle,
  ImgTeam,
  NameMemberTeam,
  Position,
  WrapperSocial,
  SocialLink,
} from './ModalTeam.styled';

export const ModalTeam = () => {
  return (
    <Container>
      <TeamTitle>Team</TeamTitle>
      <TeamList>
        {team.map(
          ({ name, position, imageMember, socialLinkGit, socialLinkedLn }) => {
            return (
              <TeamItem key={socialLinkGit}>
                <ImgTeam src={imageMember} alt={name} />
                <NameMemberTeam>{name}</NameMemberTeam>
                <Position>{position}</Position>
                <WrapperSocial>
                  <SocialLink
                    href={socialLinkGit}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </SocialLink>
                  <SocialLink
                    href={socialLinkedLn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />
                  </SocialLink>
                </WrapperSocial>
              </TeamItem>
            );
          }
        )}
      </TeamList>
    </Container>
  );
};
