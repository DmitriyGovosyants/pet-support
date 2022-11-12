import styled from '@emotion/styled';

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

export const Category = styled.span`
  position: absolute;
  top: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  padding: 6px 0 6px 20px;
  width: 158px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  letter-spacing: -0.01em;
`;

export const Description = styled.div`
  display: grid;
  grid-template-columns: 87px 161px;
  gap: 8px;
  margin-bottom: 50px;
`;

export const About = styled.div`
  padding: 20px 20px 32px 20px;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
`;

export const LearnMore = styled.button`
  width: 248px;
  border: 2px solid #f59256;
  border-radius: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  color: #f59256;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus {
    border-color: #ff6101;
    color: #ff6101;
  }
`;
