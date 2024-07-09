import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";

import { lightTheme, darkTheme } from "./theme";
import App from "./App";
import { GlobalStyle } from "./globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <React.StrictMode>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <App isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

root.render(<Root />);

reportWebVitals();
