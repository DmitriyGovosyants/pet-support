import { Section, Container, MainTitle } from 'components';
import { NewsItem } from 'components';
import React, { useState } from 'react';
import { useGetAllNewsQuery } from 'redux/newsApi';
import { Input, SearchForm, NewsList, Label, Icon } from './NewsPage.styled';

const NewsPage = () => {
  const [newsName, setNewsName] = useState('');
  const { data, error } = useGetAllNewsQuery(newsName);

  const handleSubmitForm = evt => {
    evt.preventDefault();
    setNewsName(evt.currentTarget.elements.news.value);
    evt.currentTarget.elements.news.value = '';
  };

  return (
    <Section>
      <Container>
        <MainTitle>News</MainTitle>
        <SearchForm action="" onSubmit={handleSubmitForm}>
          <Label>
            <Input type="text" name="news" placeholder="Search" />
            <Icon />
          </Label>
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
    </Section>
  );
};

export default NewsPage;
