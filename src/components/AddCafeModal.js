import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AddAttrButtonPanel from './AddAttrButtonPanel'


class CafeList extends Component {
    constructor () {
        super();
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
    }

    render () {
        return (
            <div class='s_modal'>
                <p class='t_header'>Add New Cafe</p>
                <div class='modalSplit'>
                    <AddAttrButtonPanel attribute='outlets' />
                    <AddAttrButtonPanel attribute='wifi' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    const cafes = _.map(state.cafes, (val, uid) => {
        return { ...val, uid };
    });

    return { cafes };
};

export default connect(mapStateToProps, actions)(CafeList);
