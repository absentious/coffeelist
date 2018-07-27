import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import MarkerWrapper from './MarkerWrapper';

const MAPAPIKEY = "AIzaSyCOVCDo4noFBDxGblbuw8XUomeXGo3AEXE";

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        options={{ styles: [
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "stylers": [
                    {
                        "saturation": -70
                    },
                    {
                        "lightness": 37
                    },
                    {
                        "gamma": 1.15
                    }
                ]
            },
            {
                "elementType": "labels",
                "stylers": [
                    {
                        "gamma": 0.26
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "stylers": [
                    {
                        "lightness": 0
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "hue": "#ffffff"
                    },
                    {
                        "gamma": 0
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 50
                    },
                    {
                        "saturation": 0
                    },
                    {
                        "hue": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": -50
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "lightness": 20
                    }
                ]
            }
        ]}}
    >
        {props.cafes.map(item => <MarkerWrapper cafe={item} key={item.name}/>)}
        
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
