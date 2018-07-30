import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, SearchBox } from "react-google-maps";
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import MarkerWrapper from './MarkerWrapper';

const MAPAPIKEY = "AIzaSyCOVCDo4noFBDxGblbuw8XUomeXGo3AEXE";

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 37.7649, lng: -122.4394 }}
        options={{ styles: [
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "stylers": [
                    {
                        "hue": "#00aaff"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "gamma": 2.15
                    },
                    {
                        "lightness": 12
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": 24
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 57
                    }
                ]
            }
        ]}}
    >

        {props.cafes.map(item => <MarkerWrapper cafe={item} key={item.name+" "+item.address.street}/>)}
        
    </GoogleMap>
))

class MapWrapper extends Component {
    constructor () {
        super()
    }

    componentWillMount() {
    }

    render () {
        return (
            <MapComponent
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MAPAPIKEY}&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `30rem` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                cafes={this.props.cafes}
            />
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

export default connect(mapStateToProps, actions)(MapWrapper);
