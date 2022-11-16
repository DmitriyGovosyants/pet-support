import styled from '@emotion/styled';
import { device } from "styles/mediaquery";
import { ReactComponent as Close } from 'data/img/close-icon.svg';

export const AddModalWrap = styled.div`
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

export const AddModal = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px 80px;
background-color: ${props => props.theme.colors.bgSecond};;

${device.mobileOnly} {
  padding-top: 20px;
  padding-bottom: 20px;
}
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