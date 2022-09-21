import { Button, Box } from "@mui/material";

type PalleteButtonProps = {
  onClick: () => void;
};

const PalleteButton = ({ onClick }: PalleteButtonProps) => {
  return (
    <Box textAlign="center">
      <Button
        sx={{ mt: 10 }}
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Change pallete
      </Button>
    </Box>
  );
};

export default PalleteButton;
