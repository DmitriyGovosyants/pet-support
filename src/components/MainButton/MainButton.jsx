import { Btn } from './MainButton.styled';

export const MainButton = ({
  children,
  onClick,
  type = 'button',
  option,
  size,
  // isCheck,
  // size = 'medium',
}) => {
  return (
    <Btn onClick={onClick} type={type} option={option} size={size}>
      {children}
    </Btn>
  );
};
