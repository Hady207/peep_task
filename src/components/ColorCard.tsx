import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ColorCard = ({ bgcolor }: any) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ backgroundColor: bgcolor }}>
        <CardContent sx={{ height: 135 }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Color of the Day
          </Typography>
          <Typography variant="h5" component="div">
            {bgcolor}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Like the color</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ColorCard;
