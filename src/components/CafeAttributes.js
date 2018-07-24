import React, { Component } from 'react';
import '../App.css';
import CafeAttributes_Item from './CafeAttributes_Item';
import iconData from '../data/attributeIcons.json';

class CafeAttributes extends Component {
    constructor () {
        super()

        this.state = {
            outlets: "",
            food: "",
            coffee: "",
            wifi: "",
            vertical: false
        }
    }

    componentWillMount() {
        this.setState({ 
            outlets: this.props.outlets, 
            food: this.props.food, 
            coffee: this.props.coffee, 
            wifi: this.props.wifi,
            vertical: this.props.vertical
        });
    }

    getAttributeItem(attr) {
        var AttrObj = iconData[attr][this.state[attr]];
        if (this.state.vertical == false)
            return <CafeAttributes_Item 
                colorClass={AttrObj.color}
                svgData={AttrObj.svg}
                size="28"
            />
        return (
            <div class='cafeAttributes_vertical_row'>
                <CafeAttributes_Item 
                    colorClass={AttrObj.color}
                    svgData={AttrObj.svg}
                    size="28"
                />
                <p class='cafeAttributes_vertical_text'>{AttrObj.label}</p>
            </div>
        );
    }


    render () {

        if (this.state.vertical == false)
            return (
                <div class='cafeAttributes_container'>
                    {this.getAttributeItem('outlets')}
                    {this.getAttributeItem('wifi')}
                    {this.getAttributeItem('coffee')}
                    {this.getAttributeItem('food')}
                </div>
            )
        return (
            <div class='cafeAttributes_vertical'>
                {this.getAttributeItem('outlets')}
                {this.getAttributeItem('wifi')}
                {this.getAttributeItem('coffee')}
                {this.getAttributeItem('food')}
            </div>
        )
    }
}

export default CafeAttributes;
