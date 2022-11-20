import { NoticeCategoryItem } from 'components';
import {
  List,
  Item,
  Error,
  Paginate,
  ErrorWrapper,
} from './NoticesCategoriesList.styled';
import { useParams } from 'react-router-dom';
import { useGetNoticesQuery, useGetFavoritesQuery } from 'redux/noticesApi';
import { useState, useEffect } from 'react';
import useRequest from 'hooks/useRequest';
import { useAuth } from 'redux/useAuth';
import { useSelector } from 'react-redux';
import { selectKeyWord } from 'redux/filterSlice';
import { useMediaQuery } from 'react-responsive';
import { GiJumpingDog } from 'react-icons/gi';

const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  const [skip, setSkip] = useState(true);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const search = useSelector(selectKeyWord);
  const auth = useAuth();
  const { categoryName } = useParams();
  const [request, setRequest] = useState('?category=sell');
  useRequest(categoryName, setRequest);
  const { data, isSuccess, error } = useGetNoticesQuery({
    request,
    page,
    search,
  });
  const { data: favoritesPets } = useGetFavoritesQuery('', {
    skip,
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useEffect(() => {
    if (!auth.user) {
      setSkip(true);
    } else {
      setSkip(false);
    }
  }, [auth]);

  useEffect(() => {
    if (data) {
      setPets(data.data.notices || data.data.favoriteNotices);
    } else {
      setPets([]);
    }
  }, [data, favoritesPets]);

  useEffect(() => {
    setPage(1);
  }, [categoryName]);

  useEffect(() => {
    if (isSuccess) {
      setPageCount(Math.ceil(data.total / 12));
    }
  }, [categoryName, data, isSuccess]);

  const handlePageClick = event => {
    setPage(event.selected + 1);
  };

  return (
    <>
      {isSuccess ? (
        <List>
          {pets.map(itm => {
            let favorite;
            if (
              favoritesPets?.data.favoriteNotices.some(el => el._id === itm._id)
            ) {
              favorite = true;
            } else {
              favorite = false;
            }
            return (
              <Item key={itm._id}>
                <NoticeCategoryItem petData={itm} favorite={favorite} />
              </Item>
            );
          })}
        </List>
      ) : (
        <ErrorWrapper>
          <Error>There is no any animals on your query!</Error>
          <GiJumpingDog
            size={isMobile ? '20%' : '15%'}
            style={{ margin: '0 auto', fill: '#F59256' }}
          />
        </ErrorWrapper>
      )}
      {isSuccess && data.total > 12 && (
        <Paginate
          breakLabel={isMobile ? '..' : '...'}
          nextLabel={isMobile ? '>' : 'next'}
          onPageChange={handlePageClick}
          pageRangeDisplayed={isMobile ? 1 : 2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel={isMobile ? '<' : 'previous'}
          renderOnZeroPageCount={null}
          activeClassName="active"
        />
      )}
    </>
  );
};

export default NoticesCategoriesList;
