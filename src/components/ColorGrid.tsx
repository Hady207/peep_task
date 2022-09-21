import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ColorCard from "./ColorCard";
import { toggleFav, setPrimaryColor } from "../redux/reducers/colors";
import { lightOrDark } from "../utils/colorDetector";
import { RootState } from "../redux";

const ColorGrid = () => {
  const { generatedColors, favHash, primaryColor } = useSelector(
    (state: RootState) => state.colors
  );
  const dispatch = useDispatch();

  const handleFavorite = (index: number) => {
    dispatch(toggleFav(index));
  };

  const handleSelectingPrimary = (color: string) => {
    if (primaryColor !== color) {
      dispatch(setPrimaryColor(color));
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {generatedColors?.map((color: string, index: number) => (
          <Grid key={`${color}${index}`} item xs={6} sm={6} md={3}>
            <ColorCard
              bgcolor={color}
              liked={favHash[index]}
              mood={lightOrDark(color)}
              onFavClick={() => handleFavorite(index)}
              onPrimarySelect={() => handleSelectingPrimary(color)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ColorGrid;
