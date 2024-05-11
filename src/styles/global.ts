import { createGlobalStyle } from "styled-components";
// import { Themes } from "./themes";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    scroll-behavior: smooth;
    text-decoration: none;
  }

  body{
    background: linear-gradient(to right, rgb(0, 0, 0),  90%, rgb(33, 33, 33, 0.74));
  }

`
