import React, {Component} from 'react';
import AllPeople from "./components/all-people/AllPeople";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllPlanets from "./components/all-planets/AllPlanets";
import AllStarships from "./components/all-starships/AllStarships";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to={'/people'}>
                        people
                    </Link><br/>
                    <Link to={'/planets'}>
                        planets
                    </Link><br/>
                    <Link to={'/starships'}>
                        starships
                    </Link><br/>
                    <Switch>
                        <Route path={'/people'} render={() => <AllPeople/>}/>
                        <Route path={'/planets'} render={() => <AllPlanets/>}/>
                        <Route path={'/starships'} render={() => <AllStarships/>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;


