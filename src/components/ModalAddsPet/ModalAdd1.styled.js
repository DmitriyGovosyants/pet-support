import styled from '@emotion/styled';
import { device } from "styles/mediaquery";

export const ModalAdd1Wrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`;

export const ModalAdd1Title = styled.h2`
margin-bottom: 40px;
font-weight: 500;
font-size: 36px;
line-height: 49px;
color: ${props => props.theme.colors.textMain};

${device.mobileOnly} {
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 28px;
}
`;

export const ModalAdd1Form = styled.form`
width: 100%;
`;

export const ModalAdd1Label = styled.label`
position: relative;
display: flex;
flex-direction: column;

& + & {
  margin-top: 28px;
  
  ${device.mobileOnly} {
    margin-top: 16px;
  }
}
`;

export const ModalAdd1Text = styled.p`
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

export const ModalAdd1Input = styled.input`
width: 216px;
padding: 11px 16px 10px;
width: 448px;
font-weight: 400;
font-size: 16px;
line-height: 26px;
color: ${props => props.theme.colors.textMain};
background: ${props => props.theme.colors.bgMain};
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px; 

&:focus {
  outline: none;
}

${device.mobileOnly} {
  width: 240px;
  font-size: 14px;
  line-height: 19px;
}
`;

export const ModalAdd1TextError = styled.p`
position: absolute;
bottom: -20px;
left: 10px;
font-size: 15px;
color: ${props => props.theme.colors.hover}; 

${device.mobileOnly} {
  font-size: 14px;
  line-height: 19px;
  bottom: -18px;
}
`;

export const ModalAdd1ButtonWrap = styled.div`
display: flex;
justify-content: center;

${device.mobileOnly} {
  flex-direction: column;
}
`;

export const ModalAdd1ButtonCancel = styled.button`
font-weight: 500;
font-size: 20px;
line-height: 27px;
letter-spacing: 0.04em;
margin-top: 40px;
padding: 8.5px 28px;
width: 180px;
color: ${props => props.theme.colors.textMain};
background-color: ${props => props.theme.colors.textSecond};
border: 2px solid ${props => props.theme.colors.accent};
border-radius: 40px;
cursor: pointer;

${device.mobileOnly} {
  width: 240px;
  font-size: 16px;
  line-height: 22px;
}
`;

export const ModalAdd1ButtonNext = styled.button`
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
