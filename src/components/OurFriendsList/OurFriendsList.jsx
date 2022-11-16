// import { List, Item } from './OurFriendsList.styled';
// import { useParams } from 'react-router-dom';
// import { useGetFriendsQuery } from 'redux/noticesApi';
import { OurFriendsItem } from 'components';
import { FriendsList } from './OurFriendsList.styled';

const result = [
    {
    _id: '6370ffe02b92e4d6da51db1a',
    title: 'Purina',
    url: 'https://www.purina.ua/',
    addressUrl: null,
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_290.png',
    address: null,
    workDays: null,
    phone: '+380800500950',
    email: 'info@ua.nestle.com',
  },
  {
    _id: '6370ffe02b92e4d6da51db19',
    title: 'Ветеринарний центр LicoVet',
    url: 'https://lico.vet/',
    addressUrl: 'https://goo.gl/maps/sub8u9TAAvLJRE9j9',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_292.png',
    address: 'вулиця Другетів, 77, Ужгород, Закарпатська область, 88003',
    workDays: [],
    phone: null,
    email: null,
  },
  {
    _id: '6370ffe02b92e4d6da51db18',
    title: 'Волонтерська організація БАРБОС',
    url: 'https://uk-ua.facebook.com/NGO.Barbos/',
    addressUrl: 'https://goo.gl/maps/pnzYL8t7jbG7j1SQ9',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_293.png',
    address: 'м. Ужгород',
    workDays: null,
    phone: '+380664880480',
    email: null,
  },
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
    _id: '6370ffe02b92e4d6da51db1c',
    title: 'Josera',
    url: 'https://josera.ua/',
    addressUrl: null,
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_291.png',
    address: null,
    workDays: [],
    phone: '+380800409060',
    email: 'info@josera.ua',
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
  {
    _id: '6370ffe02b92e4d6da51db16',
    title: 'ЛКП “ЛЕВ”',
    url: 'https://lkplev.com/',
    addressUrl: 'https://goo.gl/maps/4xMfxtahHPfXeAYU8',
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_289.png',
    address: '79024, м.Львів, вул. Промислова 56',
    workDays: null,
    phone: '+380685354545',
    email: null,
  },
  {
    _id: '6370ffe02b92e4d6da51db1b',
    title: 'Whiskas',
    url: 'https://www.whiskas.ua/',
    addressUrl: null,
    imageUrl:
      'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_285.png',
    address: null,
    phone: '+380800500155',
    email: null,
    workDays: [],
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
