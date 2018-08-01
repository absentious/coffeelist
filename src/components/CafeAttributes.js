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

    getSubAttribute(AttrObj) {
        if (AttrObj.display) {
            return (
                <div class='cafeAttributes_vertical_row'>
                    <CafeAttributes_Item 
                        colorClass={`cafe_icon_black ${AttrObj.opacity}`}
                        svgData={AttrObj.svg}
                        size="20"
                    />
                    <p class={`cafeAttributes_vertical_text ${AttrObj.color}`}>{AttrObj.label}</p>
                </div>
            )
        }
    }

    getAttributeItem(attr) {
        var AttrObj = iconData[attr][this.state[attr]];
        if (this.state.vertical == false)
            return <CafeAttributes_Item 
                colorClass={`cafe_icon_black ${AttrObj.opacity}`}
                svgData={AttrObj.svg}
                size="20"
            />
        else 
            return (
                this.getSubAttribute(AttrObj)
            )
    }


    render () {

        if (this.state.vertical == false)
            return (
                <div class='cafeAttributes_container'>
                    {this.getAttributeItem('outlets')}
                    {this.getAttributeItem('wifi')}
                    {this.getAttributeItem('food')}
                </div>
            )
        return (
            <div class='cafeAttributes_vertical'>
                {this.getAttributeItem('outlets')}
                {this.getAttributeItem('wifi')}
                {this.getAttributeItem('food')}
                {this.getAttributeItem('coffee')}
                {this.getAttributeItem('drinks')}
                {this.getAttributeItem('vibe')}
                {this.getAttributeItem('loft')}
            </div>
        )
    }
}

export default CafeAttributes;
