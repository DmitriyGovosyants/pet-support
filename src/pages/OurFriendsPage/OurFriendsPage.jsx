import { Container, OurFriendsList } from 'components';
import { Title, Section } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  return (
    <Section>
      <Container>
        <Title>Our friends</Title>
        <OurFriendsList />
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
