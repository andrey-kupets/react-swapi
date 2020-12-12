import React, {Component} from 'react';
import {PeopleService} from "../../services/PeopleService";
import OneHuman from "../one-human/OneHuman";
import './AllPeople.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullInfoHuman from "../one-human/FullInfoHuman";


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
        let {match: {url}} = this.props;
        return (
            <div>
                <hr/>
                {results && results.map(value => <OneHuman item={value} key={value.id}/>)} {/* без рендера всё в стейте отрабатывает*/}
                <hr className={'nest'}/>
                    <Route path={url + '/:id'} render={(props) => {
                        let {match: {params: {id}}} = props;
                        return <FullInfoHuman id={id} key={id}/>
                    }}/>
                <hr className={'nest'}/>
            </div>
        );
    }
}

export default withRouter(AllPeople);