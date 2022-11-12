import { Btn } from './Button.styled';

export const Button = ({
  children,
  onClick,
  type = 'button',
  option,
  // isCheck,
  // size = 'medium',
}) => {
  return (
    <Btn onClick={onClick} type={type} option={option}>
      {children}
    </Btn>
  );
};
