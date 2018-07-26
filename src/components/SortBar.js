import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import iconData from '../data/generalIcons.json';
import Icon from './Icon';
import CafeAttributes_Item from './CafeAttributes_Item';


class SortBar extends Component {
    constructor () {
        super()
    }

    componentWillMount() {
    }

    sortOutlet() {
        this.props.listsort("outlets", true);
    }

    sortCoffee() {
        this.props.listsort("coffee", true);
    }

    sortWifi() {
        this.props.listsort("wifi", true);
    }

    sortFood() {
        this.props.listsort("food", true);
    }

    sortNeighborhood() {
        this.props.listsort("neighborhood", false);
    }

    sortName() {
        this.props.listsort("name", false);
    }

    render () {
        return (
            <div class='cafeRow_container'>
                <div class='cafeRow'>
                    <div class='cafeNeighborhood_container'>
                        <div class='cafeNeighborhood nopad sortArrow' onClick={this.sortNeighborhood.bind(this)}>
                            <Icon 
                                colorClass="cafe_icon_black"
                                svgData={iconData.downArrow.svg}
                                size="20"
                            />
                        </div>
                    </div>
                    <div class='cafeName_container'  onClick={this.sortName.bind(this)}>
                        <div class='sortName sortArrow'>
                            <Icon 
                                colorClass="cafe_icon_black"
                                svgData={iconData.downArrow.svg}
                                size="20"
                            />
                        </div>
                    </div>
                    <div class='cafeAttributes_container'>
                        <div class='sortArrow' onClick={this.sortOutlet.bind(this)}>
                            <CafeAttributes_Item 
                                colorClass="cafe_icon_black"
                                svgData={iconData.downArrow.svg}
                                size="20"
                            />
                        </div>
                        <div class='sortArrow' onClick={this.sortWifi.bind(this)}>
                            <CafeAttributes_Item 
                                colorClass="cafe_icon_black"
                                svgData={iconData.downArrow.svg}
                                size="20"
                            />
                        </div>
                        <div class='sortArrow' onClick={this.sortCoffee.bind(this)}>
                            <CafeAttributes_Item 
                                colorClass="cafe_icon_black"
                                svgData={iconData.downArrow.svg}
                                size="20"
                            />
                        </div>
                        <div class='sortArrow' onClick={this.sortFood.bind(this)}>
                            <CafeAttributes_Item 
                                colorClass="cafe_icon_black"
                                svgData={iconData.downArrow.svg}
                                size="20"
                            />
                        </div>
                    </div>
                    <div class='cafeArrow_container'>
                        <div class='cafeArrow'></div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, actions)(SortBar);
