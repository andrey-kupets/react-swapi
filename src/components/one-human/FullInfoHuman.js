import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService";

class FullInfoHuman extends Component {

    state = {human: []};
    peopleService = new PeopleService();

    async componentDidMount() {
        let {id} = this.props;
        // console.log(id) // взяли id из пропсов, переданных с {match: {params: {id}}} = props
        let human = await this.peopleService.getHuman(id); //достаём хьюмана заново, поэтому у него снова нет своего айди
            human.id = id; // создаём и присваиваем
        this.setState({human})
        console.log(this.state.human)
    }

    render() {
        let {human} = this.state;
        return (
            <div>
                {human && <div>{human.id} - {human.name} - {human.height}sm - {human.mass}kg</div>}
            </div>
        );
    }
}

export default FullInfoHuman;