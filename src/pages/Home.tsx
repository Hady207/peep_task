import React from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { changeThemeMode } from "../redux/reducers/colors";
import { Button, Container } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleThemeModeChange = () => {
    dispatch(
      changeThemeMode(theme.palette.mode === "light" ? "dark" : "light")
    );
  };

  return (
    <Container maxWidth="sm">
      Home
      <Button
        variant="contained"
        color="success"
        onClick={handleThemeModeChange}
      >
        change pallete
      </Button>
    </Container>
  );
};

export default Home;
