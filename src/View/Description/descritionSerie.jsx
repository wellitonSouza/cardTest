import { Breadcrumbs, Button, Card, CardMedia, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import { SerieList } from "../Helper/List";
import { Link  } from "react-router-dom";
import Style from "./style";

export default function DescriptionSerie() {
  const classes = Style();
  const { id } = useParams();

  const Serie = SerieList.find((serie) => serie.id === id);
  return (
    <div className={classes.container}>
      <Breadcrumbs aria-label="breadcrumb">
        <Button component={Link} to={"/series"} className={classes.link}>
          Séries
        </Button>
        <Button className={classes.link}>{Serie.title}</Button>
      </Breadcrumbs>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <Card className={classes.card} >
            <CardMedia className={classes.media} component="video" image={'https://youtu.be/oSEWdhHBlYU'} src='https://youtu.be/oSEWdhHBlYU' />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
