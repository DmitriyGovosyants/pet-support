import styled from "@emotion/styled"
import { device } from "styles/mediaquery"

export const Cat = styled.img`
  position: absolute;
  bottom: -18px;
  right: 0;
  z-index: 10;
  transform: translateX(200%);

  width: 200px;

  animation-name: catWalk;
  animation-duration: 3000ms;
  animation-timing-function: linear;
  animation-delay: 1000ms;
  animation-iteration-count: 1;
  animation-direction: normal;

  ${device.tablet} {
    animation-duration: 4500ms;
  }

  ${device.desktop} {
    width: 300px;
    bottom: -25px;
    animation-duration: 6000ms;
  }

  @keyframes catWalk {
    0% {transform: translateX(200%)}
    100% {transform: translateX(-100vw)}
  }
`