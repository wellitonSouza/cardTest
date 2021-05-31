import { Button, Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Style from "./Style";
import MarvelLogo from "../../Assets/Marvel.jpg";
import { Link } from "react-router-dom";

export default function NavBar() {
  const classes = Style();

  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Link to="/">
                  <img src={MarvelLogo} alt="Marvel" className={classes.logo} />
                </Link>
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container justify="center" direction="row" alignItems="center" className= {classes.gridContainer}>
        <Grid item className={classes.options}>
          <Button component={Link} to="/" className={classes.button}>
            Personagens
          </Button>
          <Button component={Link} to="/series" className={classes.button}>
            Séries
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
