import React, {Component} from 'react';

class OneHuman extends Component {
    render() {
        let {item} = this.props;
        return (
            <div>
                {item.id} - {item.name};
            </div>
        );
    }
}

export default OneHuman;