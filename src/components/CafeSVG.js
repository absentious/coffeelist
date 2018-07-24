import React, { Component } from 'react';
import '../App.css';

class CafeSVG extends Component {
    constructor () {
        super()

        this.state = {
            name: {}
        }
    }

    componentWillMount() {
        this.setState({ name: this.props.name })
    }

    render () {

        return (
            <div>
                <p class='cafeName_text'>{this.state.name}</p>
            </div>
        )
    }
}

export default CafeSVG;
