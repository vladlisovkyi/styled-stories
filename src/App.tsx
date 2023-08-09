import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LightTheme, { ITheme } from "./theme/light";
import DarkTheme from "./theme/dark";
const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(p) => p.theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(p) => p.theme.bodyFontColor};
    font-family: 'Kaushan Script';
  }
`;

function App() {
  const [theme, setTheme] = useState<ITheme>(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () =>
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme)),
      }}
    >
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
