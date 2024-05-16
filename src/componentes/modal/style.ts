import styled from "styled-components";
import { Themes } from "../../styles/themes";

interface ModalProps {
  activeModal: boolean;
}

export const ContainerModal = styled.div<ModalProps>`
  position: absolute;
  display: flex;
  width: ${(active) => active.activeModal ? "100%" : '0'};
  height: calc(100vh);
  background: linear-gradient(to right, rgb(0, 0, 0),  85%, rgb(33, 33, 33, 0.1));
  z-index: 10;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  transition: all 0.7s;

  @media(max-width: 480px){
    max-height: 600px;
  }
`

export const ModalContent = styled.div<ModalProps>`
  display: ${(active) => active.activeModal ? "flex" : 'none'};
  position: relative;
  margin-top: 107px;
  gap: 41px;
  width: 659px;
  height: 439px;
  border-radius: 30px;
  overflow: hidden;
  background-color: ${Themes.colors.red};

  button {
    position: absolute;
    border: none;
    background: none;
    right: 32px;
    bottom: 25px;
    cursor: pointer;
    color: ${Themes.colors.white};
    font-size: ${Themes.fontSize.text_30};
  }

  @media(max-width: 480px){
    height: 600px;
    gap: 16px;
    background: none;
    flex-direction: column;
  }

`

export const ModalImg = styled.img`
  border-radius: 30px;

  @media(max-width: 768px){
    object-fit: contain;
    width: 100%;
    position: absolute;
  }
`

export const ModalInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
  justify-content: center;

  h1{
    line-height: 1.5rem;
    font-family: ${Themes.axiforma.bold};
    font-size: ${Themes.fontSize.text_30};
    color: ${Themes.colors.white};
  }
  p{
    line-height: 1.5rem;
    font-family: ${Themes.axiforma.thin};
    font-size: ${Themes.fontSize.text_12};
    color: ${Themes.colors.white};
  }

  @media(max-width: 480px){
    position: absolute;
    bottom: 0;
    padding: 28px 23px 16px 23px;
    border-radius: 1.875rem;
    width: 100%;
    background: linear-gradient(to bottom, rgb(255, 0, 0),  70%, rgb(128, 0, 0, 0.2));
    gap: 0.5rem;
    h1{
      font-size: ${Themes.fontSize.text_20};
    }
  }
`

export const ModalList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2, li {
    line-height: 1.5rem;
    font-family: ${Themes.axiforma.bold};
    font-size: ${Themes.fontSize.text_18};
    color: ${Themes.colors.white};
  }

  li {
    font-family: ${Themes.axiforma.thin};
  }

  img {
    margin-right: 12px;
    border-radius: 9px;
    box-shadow: 0px 3px 6px  rgb(0, 0, 0, 0.16);
  }
  @media(max-width: 480px){

    h2, li{
      font-size: ${Themes.fontSize.text_15};
    }
  }
`


export const ModalStars = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    line-height: 1.5rem;
    font-family: ${Themes.axiforma.light};
    font-size: ${Themes.fontSize.text_26};
    color: ${Themes.colors.white};
  }

  span{
    font-size: 25px;
  }

  @media(max-width: 480px){
    h2{
      font-size: ${Themes.fontSize.text_15};
    }
  }
`
