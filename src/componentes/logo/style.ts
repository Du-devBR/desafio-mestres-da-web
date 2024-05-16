import styled from "styled-components"
import { Themes } from "../../styles/themes"

export const ContainerLogotype = styled.div`
  width: 237px;
  height: 95px;
  position: relative;
  background-color: ${Themes.colors.red};

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
