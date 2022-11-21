import { Container, OurFriendsList } from 'components';
import { Title, Section } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  return (
    <Section>
      <Container>
        <Title>Our friends</Title>
        <OurFriendsList />
        {/* <div>LOGIN</div>
        <MainButton type={'submit'}>Login</MainButton>
        <div>REGISTRATION</div>
        <MainButton>Next</MainButton>
        <MainButton type={'submit'}>Register</MainButton>
        <MainButton option={'black'}>Back</MainButton>
        <div>MODAL</div>
        <MainButton option={'black'} size={'medium'} width={'fixed'}>
          Cancel
        </MainButton>
        <MainButton size={'medium'} width={'fixed'}>
          Next
        </MainButton>
        <MainButton option={'black'} size={'medium'} width={'fixed'}>
          Back
        </MainButton>
        <MainButton type={'submit'} size={'medium'} width={'fixed'}>
          Done
        </MainButton>
        <div>FindPetNav and ModalAddNoticeSelect</div>
        <MainButton
          onClick={() => console.log('yes')}
          option={'black'}
          size={'small'}
          width={'small'}
          disabled={false}
        >
          sell
        </MainButton> */}
      </Container>
    </Section>
  );
};

export default OurFriendsPage;
