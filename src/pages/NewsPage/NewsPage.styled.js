import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchIcon = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  ${device.tablet} {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  color: ${props => props.theme.colors.textMain};
  margin-bottom: 28px;
  ${device.tablet} {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;

export const NewsInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 9px 12px;
  background: ${props => props.theme.colors.textSecond};
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  border: 0px;
  ${device.tablet} {
    max-width: 608px;
    height: 44px;
    padding: 8px 20px;
  }
`;

export const SearchForm = styled.form`
  text-align: center;
  padding-bottom: 40px;
  ${device.tablet} {
    padding-bottom: 60px;
  }
`;

export const NewsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 40px;
  ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 42px;
    grid-row-gap: 60px;
  }
  ${device.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 34px;
  }
`;

export const NewsWrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 100px;
  ${device.tablet} {
    padding-top: 92px;
  }
  ${device.desktop} {
    padding-top: 38px;
    padding-bottom: 200px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  transform: translateX(-100%);
  padding-top: 10px;
  padding-right: 12px;
`;
