import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const Btn = styled.button`
  display: flex;
  padding: 0;
  
  background-color: transparent;
  border: none;
  
  cursor: pointer;

  ${device.desktop} {
    display: none;
  }
`;