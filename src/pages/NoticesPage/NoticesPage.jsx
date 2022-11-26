import {
  Section,
  Container,
  NoticesSearch,
  NoticesCategoriesNav,
  AddNoticeButton,
  MainTitle,
} from 'components';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { routesPath } from 'router';
import { Wrapper } from './NoticesPage.styled';

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
        <MainTitle>Find your favorite pet</MainTitle>
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
