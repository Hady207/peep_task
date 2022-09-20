import React, { useMemo } from "react";
import Home from "./Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Root = () => {
  const { themeMode } = useSelector((state: any) => state.colors);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default Root;
