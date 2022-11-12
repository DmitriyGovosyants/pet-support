import { useState } from 'react';
import {
  NoticesSearch,
  NoticesCategoriesNav,
  NoticesCategoriesList,
  AddNoticeButton,
} from 'components';

import { Title, Section, Wrapper } from './NoticePage.styled';

const NoticesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('sell');

  const changeCategory = newCategory => {
    setSelectedCategory(newCategory);
  };
  return (
    <Section>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <Wrapper>
        <NoticesCategoriesNav changeCategory={changeCategory} />
        <AddNoticeButton />
      </Wrapper>
      <NoticesCategoriesList selectedCategory={selectedCategory} />
    </Section>
  );
};

export default NoticesPage;
