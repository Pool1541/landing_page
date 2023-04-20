import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --charcoal: #253F4B;
    --earth-yellow: #F9BA6B;
    --body-bg: linear-gradient(90deg, #d7d8d4 80%, #E2ECF3 100%);
    --wave-bg: linear-gradient(180deg, #427982 11.12%, #1C2D3A 100%);
    --btn-bg: linear-gradient(277.77deg, #C48659 -6.89%, #EDBC6D 69.64%);
    --section-bg: linear-gradient(107deg, rgba(215,216,212,1) 20%, rgba(221,221,216,1) 63%, rgba(216,218,211,1) 100%)
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }

  html {
    font-size: 16px;
  }

  body {
    font-weight: 400;
    min-height: 100vh;
    background: var(--body-bg);
    color: var(--charcoal);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, input {
    border: none;
    background-color: unset;
    outline: none;
  }

  a, button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  img {
    pointer-events: none;
  }
`;

export default GlobalStyle;
