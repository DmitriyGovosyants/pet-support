import {
  StyledLink,
  StyledSelectedLink,
} from './NoticesCategoriesNavButton.styled';

export const NoticesCategoriesNavButton = ({
  category,
  selected,
  categoryToggler,
}) => {
  const categoryRoute = category
    .toLowerCase()
    .split(' ')
    .join('-')
    .split('/')
    .join('-');

  const onClickHandler = () => {
    categoryToggler(category);
  };
  if (category === selected) {
    return <StyledSelectedLink>{category}</StyledSelectedLink>;
  }
  return (
    <StyledLink onClick={onClickHandler} to={categoryRoute} category={category}>
      {category}
    </StyledLink>
  );
};
