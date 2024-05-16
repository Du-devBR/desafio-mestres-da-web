import styled from "styled-components";
import { Themes } from "../../styles/themes";

interface ModalProps {
  activeModal: boolean;
}

export const ContainerModal = styled.div<ModalProps>`
  position: absolute;
  display: flex;
  width: ${(active) => active.activeModal ? "100%" : '0'};
  min-height: calc(100vh);
  background: linear-gradient(to right, rgb(0, 0, 0),  85%, rgb(33, 33, 33, 0.1));
  z-index: 10;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  transition: all 0.7s;
`

export const ModalContent = styled.div<ModalProps>`
  display: ${(active) => active.activeModal ? "flex" : 'none'};
  position: relative;
  margin-top: 107px;
  gap: 41px;
  width: 659px;
  height: 439px;
  background-color: red;
  border-radius: 30px;
  overflow: hidden;

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
`

export const ModalImg = styled.img`
  border-radius: 30px;
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
`
