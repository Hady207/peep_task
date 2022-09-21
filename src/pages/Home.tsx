import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { generateRandomColor } from "../redux/reducers/colors";
import { Container, Box } from "@mui/material";
import AppBar from "../components/AppBar";
import ColorGrid from "../components/ColorGrid";
import PalleteButton from "../components/PalleteButton";
import SideDrawer from "../components/SideDrawer";
import ColorList from "../components/ColorList";

const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [openFlag, setOpenFlag] = useState<boolean>(false);

  useEffect(() => {
    dispatch(generateRandomColor());
  }, [dispatch]);

  const handleGeneratingPalete = () => {
    dispatch(generateRandomColor());
  };

  const handleOpenDrawer = () => {
    setOpenFlag(true);
  };

  const handleClosingDrawer = () => {
    setOpenFlag(false);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
      }}
    >
      <AppBar onOpenDrawer={handleOpenDrawer} />
      <SideDrawer flag={openFlag} onClose={handleClosingDrawer}>
        <ColorList />
      </SideDrawer>
      <Container>
        <ColorGrid />
        <PalleteButton onClick={handleGeneratingPalete} />
      </Container>
    </Box>
  );
};

export default Home;
