import styled from "styled-components";
import { Themes } from "../../styles/themes";

interface ImageProps {
  imgUrl: string
}

export const ContainerCard = styled.div<ImageProps>`
  position: relative;
  min-width: 289px;
  height: 439px;
  border-radius: 1.875rem;
  overflow: hidden;
  scroll-snap-align: start;
  background-image: url(${(image) => image.imgUrl});

  @media(max-height: 700px){
    align-self: flex-end;
    bottom: 1.5rem;
  }

  @media(max-width: 480px){
    height: 420px;
  }

`
export const CardInformation = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 234px;
  bottom: 0;
  padding: 28px 23px 16px 23px;
  border-radius: 1.875rem;
  background: linear-gradient(to bottom, rgb(255, 0, 0),  70%, rgb(128, 0, 0, 0.2));

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: ${Themes.axiforma.light};
    font-size: ${Themes.fontSize.text_20};
    color: ${Themes.colors.white};
  }

  @media(max-width: 480px){
    height: 200px;
  }

`

export const Information = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h1{
    font-family: ${Themes.axiforma.bold};
    font-size: ${Themes.fontSize.text_20};
    line-height: 1.5rem;
    color: ${Themes.colors.white};
  }

  p{
    font-family: ${Themes.axiforma.thin};
    font-size: ${Themes.fontSize.text_12};
    color: ${Themes.colors.white};
  }
`
