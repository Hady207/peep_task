import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ColorCard = ({ bgcolor, liked, onFavClick }: any) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ backgroundColor: bgcolor }}>
        <CardContent sx={{ height: 135 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Color of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {bgcolor}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ ml: 5 }}
              onClick={onFavClick}
            >
              {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Set As Primary Color</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ColorCard;
