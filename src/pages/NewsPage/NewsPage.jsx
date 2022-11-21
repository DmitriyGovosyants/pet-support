import { Container } from 'components';
import { NewsItem } from 'components/NewsItem/NewsItem';
import React, { useState } from 'react';
import { useGetAllNewsQuery } from 'redux/newsApi';
import {
  Title,
  NewsInput,
  SearchForm,
  NewsWrapper,
  NewsList,
  SearchButton,
  SearchIcon,
} from './NewsPage.styled';

const NewsPage = () => {
  const [newsName, setNewsName] = useState('');
  const { data, error } = useGetAllNewsQuery(newsName);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    setNewsName(evt.currentTarget.elements.news.value);
    evt.currentTarget.elements.news.value = '';
  };

  return (
    <NewsWrapper>
      <Container>
        <Title>News</Title>
        <SearchForm action="" onSubmit={handleSubmitForm}>
          <NewsInput type="text" name="news" placeholder="Search" />
          <SearchButton type="submit">
            <SearchIcon />
          </SearchButton>
        </SearchForm>
        <NewsList>
          {!error &&
            data &&
            data.data.map(({ _id, title, description, url, date }) => {
              return (
                <NewsItem
                  key={_id}
                  title={title}
                  url={url}
                  description={description}
                  date={date}
                />
              );
            })}
        </NewsList>
      </Container>
    </NewsWrapper>
  );
};

export default NewsPage;
