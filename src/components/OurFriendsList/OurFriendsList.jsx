// import { List, Item } from './OurFriendsList.styled';
// import { useParams } from 'react-router-dom';
// import { useGetFriendsQuery } from 'redux/noticesApi';
import { OurFriendsItem } from 'components';
import { Item, FriendsList } from './OurFriendsList.styled';

const result = [
  {
    _id: '6370ffe02b92e4d6da51db13',
    title: "Притулок для бездомних тварин 'Сіріус'",
    url: 'https://dogcat.com.ua',
    addressUrl: 'https://goo.gl/maps/iq8NXEUf31EAQCzc6',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_287.png',
    address: 'Fedorivka, Kyiv Oblast, Ukraine, 07372',
    workDays: [],
    phone: '+380931934069',
    email: null,
  },
  {
    _id: '6370ffe02b92e4d6da51db14',
    title: 'Happy Paw',
    url: 'https://happypaw.ua/ua',
    addressUrl: 'https://goo.gl/maps/3RyzTYBvMr9WQWCC6',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_288.png',
    address: 'Київ, вулиця Шота Руставелі, 44 (3-й поверх, офіс 7)',
    workDays: [],
    phone: '+380442900329',
    email: 'hello@happypaw.ua',
  },
];

export const OurFriendsList = ({ friends }) => {
  return (
    <FriendsList>
      {result.map(
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
            <OurFriendsItem
              key={url}
              url={url}
              title={title}
              img={imageUrl}
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
