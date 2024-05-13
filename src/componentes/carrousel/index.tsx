import { Outlet } from "react-router-dom";
import {
  ArrowNavigateLeft,
  ArrowNavigateRight,
  ContainerCarrousel,
} from "./styles";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

export function Carrousel() {
  /**
   * Referenciar o elemento ContainerCarrousel
   * @type {React.RefObject<HTMLInputElement>
   */
  const ref = useRef<HTMLInputElement>(null);

  /**
   * Scroll para esquerda dos cads dentro do container
   */
  const carouselScrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  /**
   * Scroll para direita dos cads dentro do container
   */
  const carouselScrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };
  return (
    <ContainerCarrousel ref={ref}>
      <Outlet />
      <ArrowNavigateRight onClick={carouselScrollRight}>
        <FaArrowRight />
      </ArrowNavigateRight>
      <ArrowNavigateLeft onClick={carouselScrollLeft}>
        <FaArrowLeft />
      </ArrowNavigateLeft>
    </ContainerCarrousel>
  );
}
