import { createGlobalStyle } from "styled-components";
import MilesRegular from "./assets/Miles-Regular.otf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'MyFont';
    src: url(${MilesRegular}) format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: 'MyFont', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #fff; /* Prevent white screen from blending */
  }
`;

export default GlobalStyles;
