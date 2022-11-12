import { NoticeCategoryItem } from 'components';
import { List, Item } from './NoticesCategoriesList.styled';

const petMock = {
  name: 'Catdog',
  breed: 'Сheshire bulldog',
  place: 'Mom Odessa',
  age: 'Fifth ten ',
  photo:
    'https://media1.popsugar-assets.com/files/thumbor/wh0y9TxHHfw73Je1ETKQJAyEJ38/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/11/26/625/n/1922398/a3dbbb89b318aa5b_thumb_temp_image35315381417010330/i/Dog-Dancing-Flo-Rida-Low-Video.jpg',
};
const petsMock = [petMock, petMock, petMock, petMock, petMock, petMock];

export const NoticesCategoriesList = () => {
  return (
    <>
      <List>
        {petsMock.map((itm, idx) => (
          <Item key={idx}>
            <NoticeCategoryItem petData={itm} />
          </Item>
        ))}
      </List>
    </>
  );
};
