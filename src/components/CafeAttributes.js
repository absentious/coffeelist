import React, { Component } from 'react';
import '../App.css';
import CafeAttributes_Item from './CafeAttributes_Item';
import iconData from '../data/attributeIcons.json';

class CafeAttributes extends Component {
    constructor () {
        super()

        this.state = {
            outlets: 0,
            food: 0,
            coffee: 0,
            wifi: 0,
            vibe: 0,
            loft: 0,
            drinks: 0,
            vertical: false
        }
    }

    componentWillMount() {
        this.setState({ 
            outlets: this.props.outlets, 
            food: this.props.food, 
            coffee: this.props.coffee, 
            wifi: this.props.wifi,
            loft: this.props.loft,
            vibe: this.props.vibe,
            drinks: this.props.drinks,
            vertical: this.props.vertical
        });
    }

    getSubAttribute(AttrObj, size) {
        if (AttrObj.display) {
            return (
                <div class='cafeAttributes_vertical_row'>
                    <CafeAttributes_Item 
                        colorClass={`cafe_icon_black ${AttrObj.opacity}`}
                        svgData={AttrObj.svg}
                        size={size}
                    />
                    <p class={`cafeAttributes_vertical_text ${AttrObj.color} ${AttrObj.opacity}`}>{AttrObj.label}</p>
                </div>
            )
        }
    }

    getAttributeItem(attr, size) {
        var AttrObj = iconData[attr][this.state[attr]];
        if (this.state.vertical == false)
            return <CafeAttributes_Item 
                colorClass={`cafe_icon_black ${AttrObj.opacity}`}
                svgData={AttrObj.svg}
                size={size}
            />
        else 
            return (
                this.getSubAttribute(AttrObj, size)
            )
    }


    render () {

        if (this.state.vertical == false)
            return (
                <div>
                    <div class='cafeAttributes_container'>
                        {this.getAttributeItem('outlets', 20)}
                        {this.getAttributeItem('wifi', 20)}
                        {this.getAttributeItem('food', 20)}
                    </div>
                    <div class='m_cafeAttributes_container'>
                        {this.getAttributeItem('outlets', 14)}
                        {this.getAttributeItem('wifi', 14)}
                        {this.getAttributeItem('food', 14)}
                    </div>
                </div>
            )
        return (
            <div>
                <div class='cafeAttributes_container'>
                    <div class='cafeAttributes_vertical'>
                        {this.getAttributeItem('outlets', 20)}
                        {this.getAttributeItem('wifi', 20)}
                        {this.getAttributeItem('food', 20)}
                        {this.getAttributeItem('coffee', 20)}
                        {this.getAttributeItem('drinks', 20)}
                        {this.getAttributeItem('vibe', 20)}
                        {this.getAttributeItem('loft', 20)}
                    </div>
                </div>
                <div class='m_cafeAttributes_container'>
                    <div class='cafeAttributes_vertical'>
                        {this.getAttributeItem('outlets', 14)}
                        {this.getAttributeItem('wifi', 14)}
                        {this.getAttributeItem('food', 14)}
                        {this.getAttributeItem('coffee', 14)}
                        {this.getAttributeItem('drinks', 14)}
                        {this.getAttributeItem('vibe', 14)}
                        {this.getAttributeItem('loft', 14)}
                    </div>
                </div>
            </div>
        )
    }
}

export default CafeAttributes;
