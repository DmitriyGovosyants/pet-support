import { useFetchPetsQuery, useFetchUserQuery } from 'redux/usersApi';
import {
  Section,
  Container,
  UserData,
  Logout,
  PetsData,
  Spinner,
} from 'components';
import { UserPageWrapper, UserDataWrapper } from './UserPage.styled';

const UserPage = () => {
  const { isLoading: isUserLoading, isSuccess: isUserSuccess } =
    useFetchUserQuery();
  const { isLoading: isPetsLoading, isSuccess: isPetsSuccess } =
    useFetchPetsQuery();

  if (isUserLoading || isPetsLoading) return <Spinner />;
  if (isUserSuccess && isPetsSuccess) {
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
  }
};

export default UserPage;
