import { BrowserRouter, Route, Switch } from "react-router-dom";
import history from "./View/Helper/history";
import DescriptionSerie from "./View/Description/descritionSerie";
import Hero from "./View/Heros/Hero";
import NavBar from "./View/Navbar/NavBar";
import Serie from './View/Series/Serie';
import DescriptionHero from "./View/Description/descritionHero";


export default function Routes() {
    return(
        <>
            <BrowserRouter history={history}>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Hero}/>
                    <Route exact path="/series" component={Serie}/>
                    <Route path="/hero/:id" component={DescriptionHero}/>
                    <Route path="/serie/:id" component={DescriptionSerie}/>
                    <Route  path="*"  component={Hero}/>                 
                </Switch>

            </BrowserRouter>
        </>
    )
}