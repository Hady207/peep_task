import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ColorCard from "./ColorCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleFav } from "../redux/reducers/colors";

const ColorGrid = () => {
  const { generatedColors, favHash } = useSelector(
    (state: any) => state.colors
  );
  const dispatch = useDispatch();

  const handleFavorite = (index: number) => {
    dispatch(toggleFav(index));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {generatedColors?.map((color: string, index: number) => (
          <Grid key={`${color}${index}`} item xs={3}>
            <ColorCard
              bgcolor={color}
              liked={favHash[index]}
              onFavClick={() => handleFavorite(index)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorGrid;
