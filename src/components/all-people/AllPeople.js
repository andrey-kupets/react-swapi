import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService";
import OneHuman from "../one-human/OneHuman";

class AllPeople extends Component {

    peopleService = new PeopleService();
    state = {people: []};

    async componentDidMount() {
        let people = await this.peopleService.getPeople();
        // this.setState({people});
        // let {people: {results}} = this.state;
        // let humans = results.map(value => value.url.split('/'));
        // console.log(humans)
        // let oneHuman = results.map(value => value);
        // console.log(oneHuman);
        // let {results} = people;

        for (let i = 0; i < people.results.length; i++) {
            people.results[i].id = i+1;
        }
        this.setState({people});
        console.log(this.state);

    }

    render() {
        let {people: {results}} = this.state;
        console.log(this.state.people)
        return (
            <div>
                {/*{results.map(value => <OneHuman item={value} key={value.id}/>)} /!* без рендера всё в стейте отрабатывает*!/*/}
            </div>
        );
    }
}

export default AllPeople;