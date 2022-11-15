import styled from '@emotion/styled';
import { device } from 'styles/mediaquery';


  export const itemTitle = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    text-decoration-line: underline;
    color: #F59256;
    padding-top: 12px;
    padding-bottom: 12px;
`;  
    

export const friendsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  ${device.tablet} {
    margin-bottom: ${p => p.theme.spacing(10)};
    font-size: ${p => p.theme.spacing(12)};
  }
`;

export const friendItem = styled.li`
  border-radius: 20px;
    margin-bottom: 12px;
    width: 280px;
`;

export const ItemNetwork = styled.div`
  display: flex;
`;

export const imgItem = styled.img`
  margin-left: 4px;
    margin-right: 12px;
    width: 110px;
    height: 78px;
`;

export const infoItem = styled.div`
  font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
`;

export const infoItemUl = styled.ul`
  margin-bottom: -4px;
    margin-bottom: 12px;
`;

// export const itemInfoList = styled.li`
//   margin-bottom: 4px;
// `;

// export const infoItemTime = styled.button`
//   text-align: start;
//     padding-left: 0;
//     border: none;
//     background: none;
// `;

export const infoItemWork = styled.li`
  
`;

export const itemInfoList = styled.li`
  
`;

export const infoItemTime = styled.li`
  
`;

export const infoItemAddress = styled.address`
  
`;

export const friendItemEmail = styled.a`
  
`;
export const friendItemPhone = styled.a`
  
`;



