import styled from "@emotion/styled";
import { device } from "styles/mediaquery";

export const Btn = styled.button`
cursor: pointer;
background-color: transparent;
border: none;
padding: 0;
${device.desktop} {
  display: none;
}
`;