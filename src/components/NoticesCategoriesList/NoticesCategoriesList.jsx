import { NoticeCategoryItem } from 'components';
import { List, Item } from './NoticesCategoriesList.styled';
import { useParams } from 'react-router-dom';
import { useGetNoticesQuery, useGetFavoritesQuery } from 'redux/noticesApi';
import { useState, useEffect } from 'react';
import useRequest from 'hooks/useRequest';

const NoticesCategoriesList = () => {
  const [pets, setPets] = useState([]);
  const { categoryName } = useParams();
  const [request, setRequest] = useState('?category=sell');
  useRequest(categoryName, setRequest);
  const { data } = useGetNoticesQuery(request);
  const { data: favoritesPets } = useGetFavoritesQuery();

  useEffect(() => {
    if (data) {
      setPets(data.data.notices || data.data.favoriteNotices);
    } else {
      setPets([]);
    }
  }, [data, favoritesPets]);

  return (
    <>
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
    </>
  );
};

export default NoticesCategoriesList;
