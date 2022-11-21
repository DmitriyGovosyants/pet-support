import { NewsItem } from 'components/NewsList/NewsItem';
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
      <Title>News</Title>
      <SearchForm action="" onSubmit={handleSubmitForm}>
        <NewsInput type="text" name="news" placeholder="Search" />
        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
      </SearchForm>
      <div>
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
      </div>
    </NewsWrapper>
  );
};

export default NewsPage;
