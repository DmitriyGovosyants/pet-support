import { ContainerStyled } from './Container.styled';

export const Container = ({ children, height = 'auto' }) => {
  return <ContainerStyled height={height}>{children}</ContainerStyled>;
};
