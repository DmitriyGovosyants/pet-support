import { UserData, Logout, PetsData, Container } from 'components';
import { UserPageWrapper, UserDataWrapper, Section } from './UserPage.styled';

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
