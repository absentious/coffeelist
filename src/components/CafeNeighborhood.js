import React, { Component } from 'react';
import '../App.css';

class CafeNeighborhood extends Component {
    constructor () {
        super()

        this.state = {
            neighborhood: {}
        }
    }

    componentWillMount() {
        this.setState({ neighborhood: this.props.neighborhood })
    }

    render () {

        return (
            <div class='cafeNeighborhood_bg'>
                <p class='cafeNeighborhood_text'>{this.state.neighborhood}</p>
            </div>
        )
    }
}

export default CafeNeighborhood;
