import { Grid } from "@material-ui/core";
import Style from "./Style";
import {SerieList} from "../Helper/List";
import  CardComponent  from '../Component/CardComponent';
export default function Serie() {
  const classes = Style();

  return (
    <Grid container spacing={5} className={classes.root}>
     { 
        
        SerieList?.map( hero => {
          return(
            <Grid item xs={12} sm={3} key={hero.id}>
              <CardComponent type='serie' id={hero.id} title={ hero.title } name={ hero.name } image={ hero.image } imageTitle={hero.imageTitle}/>
            </Grid>
          )
        })
      }
    </Grid>
  );
}
