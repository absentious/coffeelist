/* global google */

import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, SearchBox } from "react-google-maps";
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import MarkerWrapper from './MarkerWrapper';

const MAPAPIKEY = "AIzaSyBABXrbgUP5XYi-sGHvJ_R9KuLlugctX8s";

const MapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
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

        <SearchBox
            ref={ref => {
                refs.searchBox = ref}}
            bounds={null}
            controlPosition={google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={() => {
                const places = refs.searchBox.getPlaces();
                const bounds = new google.maps.LatLngBounds();
      
                places.forEach(place => {
                  if (place.geometry.viewport) {
                    bounds.union(place.geometry.viewport)
                  } else {
                    bounds.extend(place.geometry.location)
                  }
                });
                const nextMarkers = places.map(place => ({
                  position: place.geometry.location,
                }));
                const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
      
                this.setState({
                  center: nextCenter,
                  markers: nextMarkers,
                });
                // refs.map.fitBounds(bounds);
              }}
        >
            <input
                type="text"
                placeholder="Customized your placeholder"
                style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                marginTop: `27px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                }}
            />
        </SearchBox>
        
    </GoogleMap>
))

class MapSearchWrapper extends Component {
    constructor () {
        super()
    }

    componentWillMount() {
        const refs = {}
  
        this.setState({
          bounds: null,
          center: {
            lat: 41.9, lng: -87.624
          },
          markers: [],
          onMapMounted: ref => {
            refs.map = ref;
          },
          onBoundsChanged: () => {
            this.setState({
              bounds: refs.map.getBounds(),
              center: refs.map.getCenter(),
            })
          },
          onSearchBoxMounted: ref => {
            refs.searchBox = ref;
          },
          onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();
            const bounds = new google.maps.LatLngBounds();
  
            places.forEach(place => {
              if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport)
              } else {
                bounds.extend(place.geometry.location)
              }
            });
            const nextMarkers = places.map(place => ({
              position: place.geometry.location,
            }));
            const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
  
            this.setState({
              center: nextCenter,
              markers: nextMarkers,
            });
            // refs.map.fitBounds(bounds);
          },
        })
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

export default connect(mapStateToProps, actions)(MapSearchWrapper);
