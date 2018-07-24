import React, { Component } from 'react';
import '../App.css';

class CafeAttributes_Item extends Component {
    constructor () {
        super()

        this.state = {
            colorClass: "",
            svgData: "",
            size: ""
        }
    }

    componentWillMount() {
        this.setState({ 
            colorClass: this.props.colorClass, 
            svgData: this.props.svgData, 
            size: this.props.size 
        })
    }

    render () {

        return (
            <div class='cafeAttributes_item'>
                <svg class={this.state.colorClass} xmlns="http://www.w3.org/2000/svg" width={this.state.size} height={this.state.size} viewBox="0 0 24 24">
                    <path d={this.state.svgData} />
                </svg>
            </div>
        )
    }
}

export default CafeAttributes_Item;
