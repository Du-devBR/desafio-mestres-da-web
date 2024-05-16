import styled, { keyframes } from "styled-components"
import { Themes } from "../../styles/themes"

const translateIcon = keyframes`
  0% {
    top: 50%;
    left: 50%;
  }
  25% {
    top: 50%;
    left: 10%;
  }
  50% {
    top: 50%;
    left: 10%;
  }
  100% {
    top: 10%;
    left: 10%;
  }

`

export const ContainerLogotype = styled.div`
  position: absolute;
  width: 237px;
  height: 95px;
  background-color: ${Themes.colors.red};
  animation: ${translateIcon} 2s linear forwards;

  span {
    position: absolute;
    bottom: -54px;
    left: 2rem;
    color: ${Themes.colors.white};
    letter-spacing: 0.75rem;
    font-family: ${Themes.marvel.regular};
    font-size: ${Themes.fontSize.text_100};
  }

  @media(max-width:480px){
    width: 122px;
    height: 54px;

    span{
      bottom: -24px;
      left: 1rem;
      font-size: ${Themes.fontSize.text_50};
    }
  }
`
