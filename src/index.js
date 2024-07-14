import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import reportWebVitals from "./reportWebVitals";

import { useLocalStorage } from "./core/useLocalStorage";
import { lightTheme, darkTheme } from "./core/theme";
import App from "./App";
import { GlobalStyle } from "./core/globalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Root = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage("darkMode", false);

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
