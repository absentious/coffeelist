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

    sortDist() {
        this.props.distsort(this.props.lat, this.props.lng);
    }

    render () {
        return (
            <div class='cafeRow_container'>
                <div class='cafeRow'>
                    <div class='cafeDistance' onClick={this.sortDist.bind(this)}>
                        <div class='sortName sortArrow'>
                            <div class='cafeArrow'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="20"
                                />
                            </div>
                            <div class='cafeArrow_m'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="14"
                                />
                            </div>
                        </div>
                    </div>
                    <div class='cafeName_container'  onClick={this.sortName.bind(this)}>
                        <div class='sortName sortArrow'>
                            <div class='cafeArrow'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="20"
                                />
                            </div>
                            <div class='cafeArrow_m'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="14"
                                />
                            </div>
                        </div>
                    </div>
                    <div class='cafeAttributes_container'>
                        <div class='sortArrow' onClick={this.sortOutlet.bind(this)}>
                            <div class='cafeArrow'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="20"
                                />
                            </div>
                            <div class='cafeArrow_m'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="14"
                                />
                            </div>
                        </div>
                        <div class='sortArrow' onClick={this.sortWifi.bind(this)}>
                            <div class='cafeArrow'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="20"
                                />
                            </div>
                            <div class='cafeArrow_m'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="14"
                                />
                            </div>
                        </div>
                        <div class='sortArrow' onClick={this.sortFood.bind(this)}>
                            <div class='cafeArrow'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="20"
                                />
                            </div>
                            <div class='cafeArrow_m'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="14"
                                />
                            </div>
                        </div>
                    </div>
                    <div class='m_cafeAttributes_container m_attr_holder_width'>
                        <div class='sortArrow sortArrow_padding' onClick={this.sortOutlet.bind(this)}>
                            <div class='cafeArrow'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="20"
                                />
                            </div>
                            <div class='cafeArrow_m'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="14"
                                />
                            </div>
                        </div>
                        <div class='sortArrow sortArrow_padding' onClick={this.sortWifi.bind(this)}>
                            <div class='cafeArrow'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="20"
                                />
                            </div>
                            <div class='cafeArrow_m'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="14"
                                />
                            </div>
                        </div>
                        <div class='sortArrow sortArrow_padding' onClick={this.sortFood.bind(this)}>
                            <div class='cafeArrow'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="20"
                                />
                            </div>
                            <div class='cafeArrow_m'>
                                <Icon 
                                    colorClass="cafe_icon_black"
                                    svgData={iconData.downArrow.svg}
                                    size="14"
                                />
                            </div>
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
    const lat = state.location.lat;
    const lng = state.location.lng;

    return { lat, lng };
};

export default connect(mapStateToProps, actions)(SortBar);
