// import { List, Item } from './OurFriendsList.styled';
import { useParams } from 'react-router-dom';
import { useGetFriendsQuery } from 'redux/noticesApi';
import { FriendsItem } from 'components';
import { Item, friendsList } from './OurFriendsList.styled';


const OurFriendList = ({ friends }) => {
  return (
    <div>
      <ul className={friendsList}>
        {friends.map(
          ({
            url,
            title,
            imageUrl,
            address,
            addressUrl,
            email,
            phone,
            workDays,
          }) => {
            return (
              <FriendsItem
                key={url}
                url={url}
                title={title}
                img={imageUrl}
                timeWork={workDays}
                address={address}
                addressUrl={addressUrl}
                email={email}
                phone={phone}
              />
            );
          }
        )}
      </ul>
    </div>
  );
};

export default OurFriendList;