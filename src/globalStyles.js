import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

body {
 background-color: ${({ theme }) => theme.colors.whiteLilac};
 margin: 109px auto;
  -moz-osx-font-smoothing: grayscale;
}

button:hover {
    cursor: pointer
  }

`;
