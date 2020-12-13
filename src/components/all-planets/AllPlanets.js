import React, {Component} from 'react';
import {PLanetsService} from "../../services/PLanetsService";
import OnePlanet from "../one-planet/OnePlanet";
import './AllPlanets.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullInfoPlanet from "../one-planet/FullInfoPlanet";

class AllPlanets extends Component {

    state = {planets: []};
    planetsService = new PLanetsService();

    async componentDidMount() {
        let planets = await this.planetsService.getPlanets();

        for (let i = 0; i < planets.results.length; i++) {
            planets.results[i].id = i + 1;
        }
        this.setState({planets});
    }

    render() {
        const {planets: {results}} = this.state;
        const {match: {url}} = this.props;
        return (
            <div>
                {results && results.map(value => <OnePlanet item={value} key={value.id}/>)}
                <hr className={'nest2'}/>
                    <Route path={url + '/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullInfoPlanet id={id} key={id}/>
                    }}/>
                <hr className={'nest2'}/>
            </div>
        );
    }
}

export default withRouter(AllPlanets);