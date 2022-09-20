import { Button, Box } from "@mui/material";

const PalleteButton = ({ onClick }: any) => {
  return (
    <Box textAlign="center">
      <Button
        sx={{ mt: 10 }}
        variant="contained"
        color="success"
        onClick={onClick}
      >
        change pallete
      </Button>
    </Box>
  );
};

export default PalleteButton;
