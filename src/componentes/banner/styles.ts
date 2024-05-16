import styled from "styled-components";


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
  }

`
