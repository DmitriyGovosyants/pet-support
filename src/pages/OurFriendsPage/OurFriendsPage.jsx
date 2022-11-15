// import { useState } from 'react';
import { OurFriendsList } from 'components';
import { Title, Section, Wrapper } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  return (
    <Section>
      <Title>Our friends</Title>
      <Wrapper>
        <OurFriendsList />
      </Wrapper>
    </Section>
  );
};

export default OurFriendsPage;
