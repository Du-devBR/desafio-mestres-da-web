import { createGlobalStyle } from "styled-components";

// Importação de arquivos relacionado as fonts -> caminho fonts/*
import axiformaBold from './Axiforma/Axiforma-Bold.otf'
import axiformaLight from './Axiforma/Axiforma-Light.otf'
import axiformaMedium from './Axiforma/Axiforma-Medium.otf'
import axiformaRegular from './Axiforma/Axiforma-Regular.otf'
import axiformaThin from './Axiforma/Axiforma-Thin.otf'
import marvelRegular from './marvel-font/MarvelRegular-Dj83.ttf'


export const GlobalFonts = createGlobalStyle`

/**
 * Deafinação da fonte Axiforma
 * @type {FontFace}
*/

  @font-face {
    font-family: 'axiformaBold';
    src:
      url(${axiformaBold}) format('openType')
  }
  @font-face {
    font-family: 'axiformaLight';
    src:
      url(${axiformaLight}) format('openType')
  }
  @font-face {
    font-family: 'axiformaMedium';
    src: url(${axiformaMedium}) format('openType');
  }

  @font-face {
    font-family: 'axiformaRegular';
    src:
      url(${axiformaRegular}) format('openType')
  }
  @font-face {
    font-family: 'axiformaThin';
    src: url(${axiformaThin}) format('openType');
  }

  /**
    * Deafinação da fonte Marvel
    * @type {FontFace}
  */

  @font-face {
    font-family: 'marvelRegular';
    src: url(${marvelRegular}) format('openType');
  }

`
