import { Btn } from './MainButton.styled';

export const MainButton = ({
  children,
  onClick,
  type = 'button',
  option,
  size,
  width,
  disabled = false,
}) => {
  return (
    <Btn
      onClick={onClick}
      type={type}
      option={option}
      size={size}
      width={width}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
};
