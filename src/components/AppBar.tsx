import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { changeThemeMode } from "../redux/reducers/colors";
import ColorLensIcon from "@mui/icons-material/ColorLens";

type ButtonAppBarProps = {
  onOpenDrawer: () => void;
};

const ButtonAppBar = ({ onOpenDrawer }: ButtonAppBarProps) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleThemeModeChange = () => {
    dispatch(
      changeThemeMode(theme.palette.mode === "light" ? "dark" : "light")
    );
  };
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onOpenDrawer}
          >
            <ColorLensIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Color Pallete
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleThemeModeChange}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default ButtonAppBar;
