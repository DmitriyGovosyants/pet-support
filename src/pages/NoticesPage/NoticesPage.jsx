import {
  NoticesSearch,
  NoticesCategoriesNav,
  AddNoticeButton,
} from 'components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { routesPath } from 'router';
import { Container } from 'components';
import { Title, Section, Wrapper } from './NoticesPage.styled';

const NoticesPage = () => {
  const [isFirstMount, setIsFirstMount] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    if (isFirstMount) {
      navigate(routesPath.sell);
      setIsFirstMount(false);
    }
  }, [navigate, isFirstMount]);
  return (
    <Section>
      <Container>
        <Title>Find your favorite pet</Title>
        <NoticesSearch />
        <Wrapper>
          <NoticesCategoriesNav />
          <AddNoticeButton />
        </Wrapper>
        <Outlet />
      </Container>
    </Section>
  );
};

export default NoticesPage;
