import React, {Component} from 'react';
import {PLanetsService} from "../../services/PLanetsService";

class FullInfoPlanet extends Component {
    state = {planet: []};
    planetService = new PLanetsService();

    async componentDidMount() {
        let {id} = this.props;
        let planet = await this.planetService.getOnePlanet(id);
            planet.id = id;
        this.setState( {planet});
        console.log(this.state)
    }

    render() {
        let {planet} = this.state;
        return (
            <div>
                {planet && <div>{planet.id} - {planet.name} - diameter: {planet.diameter}km - climate: {planet.climate}</div>}
            </div>
        );
    }
}

export default FullInfoPlanet;
