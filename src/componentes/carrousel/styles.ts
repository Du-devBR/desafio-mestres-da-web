import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const ContainerCarrousel = styled.section`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  max-width: 1073px;
  margin: 0 auto;
  gap: 103px;
  min-height: calc(100vh - 113px);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media(max-width: 1080px){
    max-width: 900px;
    padding: 0 2rem;
    gap: 32px;
  }

  @media(max-width: 768px){
    max-width: 650px;
    padding: 0 2rem;
  }

  @media(max-width: 480px){
    max-width: 350px;
    padding: 0 2rem;
    gap: 103px;
  }
`

export const ArrowNavigateRight= styled.div`
  position: fixed;
  font-size: 30px;
  right: 32px;
  cursor: pointer;
  color: ${Themes.colors.white};
`

export const ArrowNavigateLeft= styled.div`
  position: fixed;
  font-size: 30px;
  left: 32px;
  cursor: pointer;
  color: ${Themes.colors.white};
`
