import React, { Component } from 'react';
import '../App.css';

class CafeName extends Component {
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
            <div class='cafeName_container'>
                <p class='cafeName_text'>{this.state.name}</p>
                {this.props.children}
            </div>
        )
    }
}

export default CafeName;
