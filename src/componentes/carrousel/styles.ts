import styled from "styled-components";

export const ContainerCarrousel = styled.section`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  max-width: 1073px;
  margin: 0 auto;
  gap: 103px;
  min-height: calc(100vh - 107px);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const ArrowNavigateRight= styled.div`
  position: fixed;
  font-size: 30px;
  color: white;
  right: 32px;
  cursor: pointer;
`

export const ArrowNavigateLeft= styled.div`
  position: fixed;
  font-size: 30px;
  color: white;
  left: 32px;
  cursor: pointer;
`
