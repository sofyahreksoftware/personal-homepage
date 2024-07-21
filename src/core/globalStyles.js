import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    max-width: 1216px;
    transition: all 0.5s ease;
    margin: 0 auto;
    padding: 0 14px;
    background-color: ${({ theme }) => theme.colors.backgrounds.main};
    font-family: "Inter", sans-serif;
    font-weight: 400px;
    letter-spacing: 0.05em;
    word-break: break-word;  
  }

  button:hover {
    cursor: pointer;
  }
`;
