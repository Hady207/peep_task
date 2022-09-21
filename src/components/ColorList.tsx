import Card from "@mui/material/Card";
import { CardActionArea, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  setPrimaryColor,
  removeColorFromPrimaryArr,
} from "../redux/reducers/colors";

const ColorItem = ({ color, onSelect, onDelete }: any) => (
  <Card
    onClick={onSelect}
    sx={{
      backgroundColor: color,
      marginBottom: 5,
      height: 90,
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <CardActionArea sx={{ height: "100%" }}>{color}</CardActionArea>
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={onDelete}
    >
      <DeleteIcon />
    </IconButton>
  </Card>
);

const ColorList = () => {
  const { historyPrimaryColor, primaryColor } = useSelector(
    (state: any) => state.colors
  );
  const dispatch = useDispatch();

  const handleSelectingPrimary = (color: string) => {
    if (primaryColor !== color) {
      dispatch(setPrimaryColor(color));
    }
  };

  const handleDelete = (colorHex: string) => {
    dispatch(removeColorFromPrimaryArr(colorHex));
  };

  return (
    <>
      {historyPrimaryColor?.map((color: string) => (
        <ColorItem
          key={color}
          color={color}
          onSelect={() => handleSelectingPrimary(color)}
          onDelete={() => handleDelete(color)}
        />
      ))}
    </>
  );
};

export default ColorList;
