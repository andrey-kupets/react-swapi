import React, {Component} from 'react';
import {StarshipsService} from "../../services/StarshipsService";

class FullInfoStarship extends Component {

    state = {starship: [],error:false};
    starshipsService = new StarshipsService();

    componentDidMount() {
        const {id} = this.props;
        this.starshipsService.getOneStarship(id).then((value) => {
            console.log('starship');
            console.log(value)
            const {error, message} = value;
            if(error){
                this.setState({error: message.detail});

            }else{
                message.id = id;
                this.setState({starship: message});
            }
        })
            .catch(err => {
                console.log('------------------');
                console.error(err)
                console.log('------------------');
            })

    }

    render() {
        const {starship,error} = this.state;
        return (
            <div>

                {error || starship && <div>{starship.id} - {starship.name} - length: {starship.length}m - class: {starship.starship_class}</div>}
            </div>
        );
    }
}

export default FullInfoStarship;
