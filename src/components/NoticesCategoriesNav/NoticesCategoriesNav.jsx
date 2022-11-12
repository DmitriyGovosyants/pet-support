import { List, Item } from './NoticesCategoriesNav.styled';
import { NoticesCategoriesNavButton } from 'components';
import { useState } from 'react';

const categoriesMock = [
  'sell',
  'lost/found',
  'In good hands',
  'Favorite ads',
  'My ads',
];

export const NoticesCategoriesNav = () => {
  const [selected, setSelected] = useState('');

  const categoryToggler = category => {
    setSelected(category);
  };
  return (
    <List>
      {categoriesMock.map((itm, idx) => (
        <Item key={idx}>
          <NoticesCategoriesNavButton
            category={itm}
            selected={selected}
            categoryToggler={categoryToggler}
          />
        </Item>
      ))}
    </List>
  );
};
