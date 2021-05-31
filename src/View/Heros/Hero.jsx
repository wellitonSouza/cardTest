import { Grid } from "@material-ui/core";
import Style from "./Style";
import { HeroList } from "../Helper/List";
import CardComponent from "../Component/CardComponent";

export default function Heros() {
  const classes = Style();
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={5}
        className={classes.root}
      >
        {HeroList?.map((hero) => {
          console.log(hero.image);
          return (
            <Grid item key={hero.id} xs={12} sm={3}>
              <CardComponent
                type="hero"
                id={hero.id}
                title={hero.title}
                name={hero.name}                
                image={hero.cardImage}
                imageTitle={hero.imageTitle}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
