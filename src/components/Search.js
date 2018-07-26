import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class Search extends Component {
    constructor () {
        super()
    }

    componentWillMount() {
    }

    tempClick() {
        this.props.listsort("coffee", true);
    }

    render () {
        return (
            <div class='s_search searchBox' onClick={this.tempClick.bind(this)}></div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, actions)(Search);
