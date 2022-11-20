import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { device } from 'styles/mediaquery';

export const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);

  width: 280px;
  min-height: 100px;
  padding: 40px 18px;

  background-color: #ffffff;
  border-radius: 20px;

  ${device.tablet} {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 608px;
    padding: 40px 80px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;

  background-color: #fdf7f2;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: #f59256;
  }

  ${device.tablet} {
    top: 24px;
    right: 24px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  color: #111111;

  ${device.tablet} {
    font-weight: 600;
    font-size: 36px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;

  font-size: 16px;
  line-height: 1.375;
  text-align: center;
  letter-spacing: -0.01em;
  color: #111111;

  ${device.tablet} {
    margin-bottom: 28px;

    font-size: 20px;
    line-height: 27px;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;

  & input:checked + label {
    background-color: #f59256;
    color: white;
  }
`;

export const CategoryLabel = styled.label`
  display: inline-block;
  padding: 8px 26px;
  margin-bottom: 12px;
  margin-right: 8px;

  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #000000;

  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  &[for='sell-radio'] {
    margin-right: 0;
  }

  ${device.tablet} {
    font-size: 20px;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 40px;
  margin: 0 auto;

  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: #111111;

  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;

  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: #f59256;
    color: #ffffff;
  }

  ${device.tablet} {
    width: 188px;
    margin: 0;
  }
`;

export const MainBtn = styled(Btn)`
  margin-top: 24px;
  margin-bottom: 12px;

  color: #ffffff;
  background-color: #f59256;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-bottom: 8px;

  font-size: 18px;
  line-height: 1.47;
  color: #111111;

  & > span {
    color: #f59256;
  }

  ${device.tablet} {
    margin-bottom: 12px;

    font-size: 24px;
    line-height: 1.1;
  }
`;

export const StyledField = styled(Field)`
  width: 240px;
  min-height: 40px;
  margin-bottom: 16px;
  padding-left: 14px;

  font-weight: 400;
  font-size: 14px;
  line-height: 1.35;
  color: #111111;

  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  &::placeholder {
    color: rgba(27, 27, 27, 0.6);
  }

  &[id='comments'] {
    resize: none;

    &::placeholder {
      padding-top: 5px;
    }
  }

  ${device.tablet} {
    width: 448px;
    margin-bottom: 28px;

    &[id='comments'] {
      height: 118px;
      padding: 16px 18px;
    }
  }
`;

export const ErrorMessageWrapper = styled.span`
  margin-top: -14px;
  margin-bottom: 14px;

  font-weight: 400;
  font-size: 12px;
  line-height: 1.35;
  text-align: center;
  color: red;
`;

export const DescriptionText = styled.p`
  margin-bottom: 16px;

  font-size: 18px;
  line-height: 1.47;
  color: #000000;

  & > span {
    color: #f59256;
  }

  ${device.tablet} {
    font-size: 24px;
    line-height: 1.1;
  }
`;

export const StyledRadioBtn = styled(Field)`
  display: none;

  & + label {
    cursor: pointer;
  }

  &:checked {
    & + label {
      color: #f59256;
    }
  }
`;

export const SexWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const PlusBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 116px;
  height: 116px;
  margin-bottom: 28px;

  background-color: #fdf7f2;
  border-radius: 20px;
  cursor: pointer;

  ${device.tablet} {
    width: 140px;
    height: 140px;
  }
`;

export const BtnWrapper = styled.div`
  ${device.tablet} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    margin-top: 12px;
  }
`;
