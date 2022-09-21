import Card from "@mui/material/Card";
import { CardActionArea, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type ColorItemProps = {
  color: string;
  onSelect: () => void;
  onDelete: () => void;
};

const ColorItem = ({ color, onSelect, onDelete }: ColorItemProps) => (
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

export default ColorItem;
