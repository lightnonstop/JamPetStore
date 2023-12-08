import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync } from "../pages/basket/basketSlice";
import { fetchCurrentUser } from "../pages/account/accountSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser())
      await dispatch(fetchBasketAsync())
    } catch (error) {
      console.log(error);
    }
  }, [dispatch])

  useEffect(() => {
    initApp().then(() => setLoading(false))
  }, [initApp])

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

  if (loading) return <LoadingComponent message="Initializing app..." />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header setDarkMode={setDarkMode} />
      <Container sx={{ py: "50px" }}>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default App
