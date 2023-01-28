import React, { useMemo } from "react";
import Home from "./Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "../redux";

import { Outlet } from "react-router-dom";

const Root = () => {
  const { themeMode, primaryColor } = useSelector(
    (state: RootState) => state.colors
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: primaryColor || "#1976d2",
          },
        },
      }),
    [themeMode, primaryColor]
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default Root;
