import styled from '@emotion/styled';

export const Title = styled.h1`
  margin-bottom: 28px;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
  }
`;

export const Section = styled.section`
  padding-top: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }
`;
