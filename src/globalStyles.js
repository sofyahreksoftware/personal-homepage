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
 max-width: 1216px;
 margin: 109px auto;
 background-color: ${({ theme }) => theme.colors.whiteLilac};
 font-family: "Inter", sans-serif;
 font-weight: 400px;
 letter-spacing: 1.5px;
-moz-osx-font-smoothing: grayscale;
}

button:hover {
    cursor: pointer
  }
`;
