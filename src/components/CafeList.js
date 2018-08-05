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
        console.log(document.getElementById('s_list').scrollTop);
    }

    componentWillMount() {
        this.props.cityCheck("San Francisco");
        //this.props.cafeFetch("San Francisco"); <- deprecated

        navigator.geolocation.getCurrentPosition((loc) => {
            console.log('The location in lat lon format is: [', loc.coords.latitude, ',', loc.coords.longitude, ']');
            this.props.getLocation({ lat: loc.coords.latitude, lng: loc.coords.longitude });
        });
    }





    render () {
        return (
            <div class='s_list' id='s_list'>
                {this.props.cafes.map(item => <CafeItem cafe={item} key={item.name+" "+item.address.street}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const cafes = _.map(state.cafes, (val, uid) => {
        return { ...val, uid };
    });

    const cityLat = state.city.lat;
    const cityLng = state.city.lng;
    //console.log(cityLat);
    //console.log(cityLng);
    return { cafes, cityLat, cityLng };
};

export default connect(mapStateToProps, actions)(CafeList);
