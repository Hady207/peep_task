import React from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { changeThemeMode } from "../redux/reducers/colors";
import { Button, Container, Box } from "@mui/material";
import AppBar from "../components/AppBar";

const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleThemeModeChange = () => {
    dispatch(
      changeThemeMode(theme.palette.mode === "light" ? "dark" : "light")
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
      }}
    >
      <AppBar />
      <Container>
        <Button
          variant="contained"
          color="success"
          onClick={handleThemeModeChange}
        >
          change pallete
        </Button>
      </Container>
    </Box>
  );
};

export default Home;
