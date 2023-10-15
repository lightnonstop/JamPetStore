import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? '#EAEAEA' : '#121212'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header setDarkMode={setDarkMode} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default App
