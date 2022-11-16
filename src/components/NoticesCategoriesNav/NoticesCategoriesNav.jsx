import { List, Item } from './NoticesCategoriesNav.styled';
import { NoticesCategoriesNavButton } from 'components';
import { useState, useEffect } from 'react';
import { categories, categoriesWithoutAuth } from 'constants/constants';
import { useAuth } from 'redux/useAuth';

export const NoticesCategoriesNav = () => {
  const [selected, setSelected] = useState('sell');
  const [navCategories, setNavCategories] = useState(categoriesWithoutAuth);
  const auth = useAuth;

  useEffect(() => {
    if (auth.user) {
      setNavCategories(categories);
    } else {
      setNavCategories(categoriesWithoutAuth);
    }
  }, [auth]);

  const categoryToggler = category => {
    setSelected(category);
  };
  return (
    <List>
      {navCategories.map((itm, idx) => (
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
