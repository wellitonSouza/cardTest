import { Breadcrumbs, Button, Grid } from "@material-ui/core";
import { useParams } from "react-router";
import Style from "./style";
import { HeroList } from "../Helper/List";
import { Link  } from "react-router-dom";

export default function DescriptionHeros() {
  const classes = Style();
  const { id } = useParams();
  const Hero = HeroList.find((hero) => hero.id === id);
  return (
    <div className={classes.container}>
      <Breadcrumbs aria-label="breadcrumb">
        <Button component={Link} to={"/"} className={classes.link}>
          Personagens
        </Button>
        <Button className={classes.link} >{Hero.title}</Button>
      </Breadcrumbs>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={12} sm={6}>
          <img src={Hero.image} alt={Hero.name} className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.text}  >
          {Hero.description}
        </Grid>
      </Grid>
    </div>
  );
}
