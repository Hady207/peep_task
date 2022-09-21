import { Button, Box } from "@mui/material";

type PaletteButtonProps = {
  onClick: () => void;
};

const PaletteButton = ({ onClick }: PaletteButtonProps) => {
  return (
    <Box textAlign="center">
      <Button
        sx={{ mt: 10 }}
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Change Palette
      </Button>
    </Box>
  );
};

export default PaletteButton;
