import {
  StyledLink,
  StyledSelectedLink,
} from './NoticesCategoriesNavButton.styled';
import PropTypes from 'prop-types';

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

NoticesCategoriesNavButton.propTypes = {
  category: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  categoryToggler: PropTypes.func.isRequired,
};
