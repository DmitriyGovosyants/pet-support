// import { List, Item } from './OurFriendsList.styled';
import { useParams } from 'react-router-dom';
import { useGetFriendsQuery } from 'redux/noticesApi';
import { OurFriendsItem } from 'components';
import { List, Item } from './OurFriendsList.styled';

const petsFriends = {
  title: title,
  photo,
  time,
  address,
  email,
  phone };

export const OurFriendsList = () => {
  const { data, isFetching } = useGetFriendsQuery;
  return (
    <>
      <List>
        {petsFriends.map((item, index) => (
          <Item key={index}></Item>
        ))}
      </List>
    </>
  );
}

