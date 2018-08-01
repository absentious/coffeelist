import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';


class CafeList extends Component {
    constructor () {
        super();
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition((loc) => {
            console.log('The location in lat lon format is: [', loc.coords.latitude, ',', loc.coords.longitude, ']');
            this.props.getLocation({ lat: loc.coords.latitude, lng: loc.coords.longitude });
        });

        this.props.cafeFetch();
    }

    render () {
        return (
            <div class='s_list'>
                {this.props.cafes.map(item => <CafeItem cafe={item} key={item.name+" "+item.address.street}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const cafes = _.map(state.cafes, (val, uid) => {
        return { ...val, uid };
    });
    return { cafes };
};

export default connect(mapStateToProps, actions)(CafeList);
