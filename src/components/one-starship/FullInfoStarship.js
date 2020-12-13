import React, {Component} from 'react';
import {StarshipsService} from "../../services/StarshipsService";

class FullInfoStarship extends Component {

    state = {starship: []};
    starshipsService = new StarshipsService();

    async componentDidMount() {
        const {id} = this.props;
        const starship = await this.starshipsService.getOneStarship(id)
        starship.id = id;
        this.setState({starship});
    }

    render() {
        const {starship} = this.state;
        return (
            <div>
                {starship && <div>{starship.id} - {starship.name} - length: {starship.length}m - class: {starship.starship_class}</div>}
            </div>
        );
    }
}

export default FullInfoStarship;