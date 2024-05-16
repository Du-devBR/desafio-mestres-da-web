import styled from "styled-components";
import { Themes } from "../../styles/themes";

export const SelectMovies = styled.div`
  position: absolute;
  top: 110px;
  width: 100px;

  @media(min-height: 852px){
    top: 200px;
  }

  select{
    padding: 1rem 1.25rem;
    border-radius: 0.625rem;
    background: transparent;
    outline: none;
    border-color: ${Themes.colors.red};
    font-family: ${Themes.axiforma.bold};
    font-size: ${Themes.fontSize.text_16};
    color: ${Themes.colors.red};

  }


`
