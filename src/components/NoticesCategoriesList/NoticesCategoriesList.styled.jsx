import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  width: 280px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 20px 20px;
  @media screen and (min-width: 768px) {
    width: 336px;
    border-radius: 0px 0px 40px 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;
