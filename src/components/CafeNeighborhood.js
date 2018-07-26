import React, { Component } from 'react';
import '../App.css';

class CafeNeighborhood extends Component {
    constructor () {
        super()

        this.state = {
            neighborhood: "",
            sortFlag: ""
        }
    }

    componentWillMount() {
        this.setState({ neighborhood: this.props.neighborhood, sortFlag: this.props.sortFlag })
    }

    render () {

        return (
            <div class='cafeNeighborhood_bg'>
                <p class='cafeNeighborhood_text'>{this.state.neighborhood}{this.state.sortFlag}</p>
            </div>
        )
    }
}

export default CafeNeighborhood;
