import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const RecipeCard = (props) => {
  const {recipeData} = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {recipeData.name.substr(0,1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipeData.name}
        subheader={moment(recipeData.created_at).format('YYYY-MM-DD HH:mm')}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipeData.image}
        alt={recipeData.image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {recipeData.note}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon color={recipeData.favorite == 1 ? "primary" : ""} />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography fontWeight={"bold"} paragraph>Összetevők:</Typography>
            <ul>
              {
                recipeData.ingredients.map(i => {
                  return (
                  <li key={i.id}>
                    {i.amount} {i.unit} - {i.name} <Typography style={{fontStyle: "italic", opacity: "0.3", fontWeight: 700}} component={"span"} color={"secondary"}>({i.type})</Typography>
                  </li>)
                })
              }
            </ul>
          <Typography fontWeight={"bold"} paragraph>Elkészítés:</Typography>
            {recipeData.description}
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default RecipeCard;