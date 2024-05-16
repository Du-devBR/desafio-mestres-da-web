import styled, { keyframes } from "styled-components";

const Appear = keyframes`
  0% {
    opacity: 0;
  }

  50%{
    opacity: 0;
  }

  90%{
    opacity: 0.8;
  }

  100%{
    opacity: 1;
  }
`

export const BannerImg = styled.div`
  position: absolute;
  width: 100%;
  min-height: calc(100vh);
  background: linear-gradient(to right, rgb(0, 0, 0),  80%, rgb(33, 33, 33, 0.74));
  background-color: red;
  overflow: hidden;
  z-index: -1;

  img {
    position: absolute;
    right: 0;
    height: 100%;
    top: 0;
    z-index: 1;
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1), 20%, rgba(0, 0, 0, 0));
    animation: ${Appear} 2s linear forwards;
  }

`
