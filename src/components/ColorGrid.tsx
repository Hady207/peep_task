import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ColorCard from "./ColorCard";
import { useSelector } from "react-redux";

const ColorGrid = () => {
  const { generatedColors } = useSelector((state: any) => state.colors);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {generatedColors?.map((color: string, index: number) => (
          <Grid key={`${color}${index}`} item xs={3}>
            <ColorCard bgcolor={color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorGrid;
