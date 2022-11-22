import { Section, Container, UserData, Logout, PetsData } from 'components';
import { UserPageWrapper, UserDataWrapper } from './UserPage.styled';

const UserPage = () => {
  return (
    <Section>
      <Container>
        <UserPageWrapper>
          <UserDataWrapper>
            <UserData />
            <Logout />
          </UserDataWrapper>
          <PetsData />
        </UserPageWrapper>
      </Container>
    </Section>
  );
};

export default UserPage;
