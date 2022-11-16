// import { List, Item } from './OurFriendsList.styled';
// import { useParams } from 'react-router-dom';
// import { useGetFriendsQuery } from 'redux/noticesApi';
import { OurFriendItem } from 'components';
import { FriendsList } from './OurFriendsList.styled';
import data from './friends.json';

export const OurFriendsList = () => {
  return (
    <FriendsList>
      {data.map(
        ({
          title,
          url,
          imageUrl,
          workDays,
          address,
          addressUrl,
          email,
          phone,
        }) => {
          return (
            <OurFriendItem
              key={url}
              title={title}
              url={url}
              imageUrl={imageUrl}
              workDays={workDays}
              address={address}
              addressUrl={addressUrl}
              email={email}
              phone={phone}
            />
          );
        }
      )}
    </FriendsList>
  );
};
