import {
  NoticesSearch,
  NoticesCategoriesNav,
  NoticesCategoriesList,
  AddNoticeButton,
  Container,
} from 'components';

import { Title, Section, Wrapper } from './NoticePage.styled';

const NoticesPage = () => {
  return (
    <Section>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <Wrapper>
          <NoticesCategoriesNav />
          <AddNoticeButton />
        </Wrapper>
        <NoticesCategoriesList />
      </Container>
    </Section>
  );
};

export default NoticesPage;
