
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Style from './Style';
import { Link } from 'react-router-dom';



export default function CardComponent({id, title, name, image, type = ''}) {
  const classes = Style();
  const redirect = ( type === 'hero' ? `/${type}/${id}` : '/series' );
  return (
    <Card className={classes.root} elevation={5}>
      <CardActionArea component={Link}   to={redirect} >
        <CardMedia
          className={type === 'hero'?  classes.media : classes.serie }
          image={image}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {title} 
          </Typography>
        </CardContent>
      </CardActionArea >
      <CardActions component={Link} to={redirect} >
        <Button size="large" color="secondary">
         {name}
        </Button>
      </CardActions>
    </Card>
  );
}