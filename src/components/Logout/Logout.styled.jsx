import styled from '@emotion/styled';
// import { theme } from 'styles';
import { device } from 'styles/mediaquery';

// export const LogoutWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
//   padding: 0 14px 0 0;

//   ${device.tabletOnly} {
//     position: absolute;
//     left: 32px;
//     bottom: 24px;
//     padding: 0;
//   }

//   ${device.desktop} {
//     left: 16px;
//     bottom: 40px;
//   }
// `;

export const LogoutButton = styled.button`
  position: absolute;
  right: 12px;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  letter-spacing: 0.04em;

  /* Cерый */

  color: rgba(17, 17, 17, 0.6);

  ${device.tablet} {
    left: 32px;
    bottom: 24px;
  }

  ${device.desktop} {
    left: 16px;
    bottom: 40px;
  }
`;
