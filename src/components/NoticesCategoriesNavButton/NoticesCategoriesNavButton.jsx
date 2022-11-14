import { Button } from './NoticesCategoriesNavButton.styled';

export const NoticesCategoriesNavButton = ({
  category,
  selected,
  categoryToggler,
}) => {
  const onClickHandler = () => {
    categoryToggler(category);
  };
  return (
    <Button
      onClick={onClickHandler}
      disabled={category === selected ? true : false}
    >
      {category}
    </Button>
  );
};
