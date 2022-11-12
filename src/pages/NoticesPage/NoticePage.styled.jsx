import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;

export const Section = styled.section`
  padding: 40px 16px;
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
