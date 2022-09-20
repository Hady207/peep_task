import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { generateRandomColor } from "../redux/reducers/colors";
import { Container, Box } from "@mui/material";
import AppBar from "../components/AppBar";
import ColorGrid from "../components/ColorGrid";
import PalleteButton from "../components/PalleteButton";

const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateRandomColor());
  }, [dispatch]);

  const handleGeneratingPalete = () => {
    dispatch(generateRandomColor());
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
      }}
    >
      <AppBar />
      <Container>
        <ColorGrid />
        <PalleteButton onClick={handleGeneratingPalete} />
      </Container>
    </Box>
  );
};

export default Home;
