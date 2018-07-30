import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import CafeAttributes_Item from './CafeAttributes_Item';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import iconData from '../data/attributeIcons.json';

class CafeList extends Component {
    constructor () {
        super();
        this.state = {
            attribute: "",
            level: ''
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
        this.setState({ attribute: this.props.attribute, level: this.props.level });
    }

    selectOption() {
        if (this.props.selected) {
            this.props.clearModalAttr(this.state.attribute, this.state.level);
        }
        else {
            this.props.selectModalAttr(this.state.attribute, this.state.level);
        }
        
    }

    renderBg() {
        if (this.props.selected) {
            return <div class='modalButton_bg_selected'></div>
        }
        return <div class='modalButton_bg'></div>
    }

    renderIcon() {
        var AttrObj = iconData[this.state.attribute][this.state.level];
        return (
            <div class='modalButtonElements'>
                <CafeAttributes_Item 
                    colorClass={`${AttrObj.color} ${AttrObj.opacity}`}
                    svgData={AttrObj.svg}
                    size="20"
                />
                <div class='modalButtonText_container'>
                    <p class='modalButtonText'>{AttrObj.label}</p>
                </div>
            </div>
        )
    }

    render () {
        return (
            <div class='modalButton' onClick={this.selectOption.bind(this)}>
                {this.renderBg()}
                {this.renderIcon()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const attrSelected = state.modalAttr;
    const selected = ownProps.level === state.modalAttr[ownProps.attribute];

    return { selected };
};

export default connect(mapStateToProps, actions)(CafeList);
