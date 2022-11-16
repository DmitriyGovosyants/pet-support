import styled from '@emotion/styled';
import { device } from "styles/mediaquery";
import { ReactComponent as PlusIcon } from 'data/img/plus-icon.svg';

export const ModalAdd2Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

export const ModalAdd2Title = styled.h2`
margin-bottom: 20px;
font-weight: 500;
font-size: 36px;
line-height: 49px;
color: ${props => props.theme.colors.textMain};

${device.mobileOnly} {
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 20px;
}
`;

export const ModalAdd2Coment = styled.p`
margin-bottom: 20px;
font-weight: 500;
font-size: 20px;
line-height: 24px;
letter-spacing: -0.01em;
color: ${props => props.theme.colors.textMain};

${device.mobileOnly} {
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
}
`;

export const ModalAdd2Form = styled.form`
width: 100%;
`;

export const ModalAdd2FotoWrap = styled.div`
position: relative;
margin-bottom: 40px;

${device.mobileOnly} {
  margin-bottom: 20px;
}
`;

export const ModalAdd2FotoLabel = styled.label`
position: relative;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const ModalAdd2Input = styled.input`
opacity: 0;
visibility: hidden;
position: absolute;
`;

export const ModalAdd2InputWrap = styled.div`
height: 182px;
width: 182px;
display: flex;
align-items: center;
justify-content: center;
font-size: 18px;
font-weight: 400;
line-height: 26px;
color: #7e7e7e;
background: ${props => props.theme.colors.bgMain};
border-radius: 40px;
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
overflow: hidden;

${device.mobileOnly} {
  height: 208px;
  width: 208px;
}
`;

export const ModalAdd2Img = styled.img`
width: 100%;
z-index: 20;
`;

export const StyledPlusIcon = styled(PlusIcon)`
width: 48px;
`;

export const ModalAdd2InputWrapChoise = styled.div`
opacity: 0;
position: absolute;
top: 0;
left: 30%;
width: 40%;
height: 100%;
border-radius: 40px;
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
font-size: 18px;
line-height: 26px;
color: ${props => props.theme.colors.bgSecond};
background-color: ${props => props.theme.colors.btnTransporent};
z-index: 20;
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;

&:hover {
  opacity: 1;
  box-shadow: (0px 1px 10px ${props => props.theme.colors.accent});
}

${device.mobileOnly} {
  display: none;
}
`;

export const ModalAdd2InputErrorImg = styled.p`
position: absolute;
bottom: -20px;
left: 35%;
font-size: 15px;
color: ${props => props.theme.colors.hover};
`;

export const ModalAdd2Label = styled.label`
position: relative;
display: flex;
flex-direction: column;

& + & {
  margin-top: 28px;
}
`;

export const ModalAdd2Text = styled.p`
margin-bottom: 12px;
font-weight: 500;
font-size: 24px;
line-height: 26px;
color: ${props => props.theme.colors.textMain};

${device.mobileOnly} {
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 8px;
}
`;

export const ModalAdd2Comments = styled.textarea`
padding: 11px 16px 10px;
width: 448px;
min-height: 116px;
font-weight: 400;
font-size: 16px;
line-height: 26px;
color: ${props => props.theme.colors.textMain};
background: ${props => props.theme.colors.bgMain};
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 20px;

&:focus {
  outline: none;
}

${device.mobileOnly} {
  width: 240px;
  height: 100px;
  font-size: 14px;
}
`;

export const ModalAdd2TextError = styled.p`
position: absolute;
bottom: -20px;
left: 10px;
font-size: 15px;
color: ${props => props.theme.colors.hover};
`;

export const ModalAdd2ButtonWrap = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;

${device.mobileOnly} {
  flex-direction: column;
}

`;

export const ModalAdd2ButtonCancel = styled.button`
font-weight: 500;
font-size: 20px;
line-height: 27px;
letter-spacing: 0.04em;
color: ${props => props.theme.colors.textMain};
background-color: ${props => props.theme.colors.bgSecond};
margin-top: 40px;
padding: 8.5px 28px;
width: 180px;
border: 2px solid ${props => props.theme.colors.accent};
border-radius: 40px;
cursor: pointer;

${device.mobileOnly} {
  width: 240px;
  font-size: 16px;
  line-height: 22px;
}
`;

export const ModalAdd2ButtonNext = styled.button`
font-weight: 500;
font-size: 20px;
line-height: 27px;
letter-spacing: 0.04em;
margin-top: 40px;
margin-left: 24px;
padding: 8.5px 28px;
width: 180px;
color: ${props => props.theme.colors.textSecond};
background-color: ${props => props.theme.colors.accent};  
border: 2px solid ${props => props.theme.colors.accent};
border-radius: 40px;
cursor: pointer;
${device.mobileOnly} {
  width: 240px;
  margin-left: 0px;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 22px;
}
`;
