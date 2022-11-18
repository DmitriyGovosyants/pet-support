import styled from '@emotion/styled';
import { device } from "styles/mediaquery";
import { ReactComponent as Close } from 'data/img/close-icon.svg';
import { ReactComponent as PlusIcon } from 'data/img/plus-icon.svg';
import { MainButton } from 'components';

export const ModalWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 90%;
max-width: 608px;
margin-left: auto;
margin-right: auto;
padding: 50px 20px;
border-radius: 20px;
position: absolute;
top: 50%;
left: 50%;
box-shadow: rgb(199 123 27) 3px 3px 10px, rgb(199 123 27) -3px -3px 10px;
background-color: ${props => props.theme.colors.bgSecond};
transform: translate(-50%, -50%);
`;

export const ButtonClose = styled.button`
display: flex;
width: 34px;
height: 34px;
align-items: center;
justify-content: center;
position: absolute;
top: 20px;
right: 20px;
border-radius: 50%;
background-color: ${props => props.theme.colors.bgMain};
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
:hover,
:focus {
  color: ${props => props.theme.colors.accent};
}
`;

export const CloseIcon = styled(Close)`
fill: currentColor;
`;

export const Form = styled.form`
${device.mobile} {
  padding: 0px 60px;
}

${device.tablet} {
  padding: 0px 87px;
}
`;

export const Title = styled.h1`
margin-bottom: 20px;
text-align: center;
font-size: 24px;
line-height: 1.37;
color: ${p => p.theme.colors.textMain};

${device.tablet} {
  margin-bottom: 40px;
  font-size: 36px;
}
`;

export const SubTitle = styled.h2`
text-align: center;
margin-bottom: 20px;
font-size: 16px;
line-height: 1.37;
letter-spacing: -0.01em;
color: ${p => p.theme.colors.textMain};

${device.tablet} {
  font-size: 20px;
  line-height: 1.2;
}
`;

export const Label = styled.label`
display: block;
:not(:first-of-type) {
  margin-top: 16px;
}
margin-bottom: 8px;
font-size: 18px;
line-height: 1.4;
color: ${p => p.theme.colors.textMain};

${device.tablet} {
  font-size: 24px;
  line-height: 1.08;
  margin-bottom: 12px;
  :not(:first-of-type) {
    margin-top: 28px;
  }
}
`;

export const Input = styled.input`
width: 100%;
:not(:last-child) {
  margin-bottom: 2px;
}
padding: 11px 14px;
border-radius: 40px;
background: ${p => p.theme.colors.bgMain};
border: 1px solid rgba(245, 146, 86, 0.5);

${device.tablet} {
  padding: 11px 16px;
}

:focus {
  outline-color: rgba(245, 146, 86, 0.5);
}
`;

export const ErrorText = styled.p`
margin-left: 10px;
&:not(:last-of-type) {
  margin-bottom: 14px;
}
font-size: 10px;
color: ${p => p.theme.colors.hover};
`;

export const BtnBox = styled.div`
margin-top: 40px;

${device.tablet} {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  gap: 20px
}
`;

export const Button = styled(MainButton)`
${device.mobile} {
  margin-bottom: 12px;
}
`;

export const FotoWrap = styled.div`
height: 182px;
width: 182px;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
font-weight: 400;
line-height: 26px;
color: #7e7e7e;
margin: 0 auto;
background: ${props => props.theme.colors.bgMain};
border-radius: 40px;
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
overflow: hidden;

${device.mobileOnly} {
  height: 208px;
  width: 208px;
`;

export const InputFoto = styled.input`
opacity: 0;
position: absolute;
`;

export const ErrorTextFoto = styled.p`
margin-left: 30px;
margin-top: 10px;
&:not(:last-of-type) {
  margin-bottom: 14px;
}
font-size: 10px;
color: ${p => p.theme.colors.hover};

${device.tablet} {
  margin-left: 120px;
`;

export const Textarea = styled.textarea`
width: 100%;
padding: 12px 14px;
border-radius: 20px;
background: ${p => p.theme.colors.bgMain};
border: 1px solid rgba(245, 146, 86, 0.5);

${device.mobile} {
  width: 240px;
  height: 100px;
}

${device.tablet} {
  width: 394px;
  height: 116px;
  margin-right: auto;
  margin-left: auto;
}
`;

export const StyledPlusIcon = styled(PlusIcon)`
width: 48px;
`;


