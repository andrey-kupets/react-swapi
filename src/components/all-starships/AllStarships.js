import React, {Component} from 'react';
import {StarshipsService} from "../../services/StarshipsService";
import OneStarship from "../one-starship/OneStarship";
import './AllStarships.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import FullInfoStarship from "../one-starship/FullInfoStarship";

class AllStarships extends Component {

    state = {starships: []};
    starshipsService = new StarshipsService();

    async componentDidMount() {
        const starships = await this.starshipsService.getStarships();
        for (let i = 0; i < starships.results.length; i++) {
            console.log(((starships.results[i].url).split("/").reverse())[1]);
            starships.results[i].id =(((starships.results[i].url).split("/").reverse())[1] );
        }
        this.setState({starships});
    }

    render() {
        const {starships: {results}} = this.state;
        const {match: {url}} = this.props;
        return (
            <div>
                {results && results.map(value => <OneStarship item={value} key={value.id}/>)}
                <hr className={'nest3'}/>
                <Route path={url + '/:id'} render={(props) => {
                    const {match: {params: {id}}} = props;
                    return <FullInfoStarship id={id} key={id}/>
                }}/>
                <hr className={'nest3'}/>
            </div>
        );
    }
}

export default withRouter(AllStarships);
