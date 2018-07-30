/* global google */
import _ from 'lodash';
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { SearchBox } from "react-google-maps/lib/components/places/SearchBox";
const { compose, withProps, lifecycle } = require("recompose");


const AddSearchWrapper = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{  height: `100%`, marginRight: `0` }} />,
    containerElement: <div style={{ width: `60%`, height: `10rem` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
            lat: 37.7749, lng: -122.4194 
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
          console.log(this.props.cafes);
          const places = refs.searchBox.getPlaces();
          console.log(places);
          var map_neighborhood = places[0].address_components[2].short_name;
          var map_street = places[0].address_components[0].short_name+" "+places[0].address_components[1].short_name;
          var map_addr = places[0].address_components[3].long_name+", "+places[0].address_components[5].short_name+" "+places[0].address_components[7].short_name;
          var map_name = places[0].name;
          var map_lat = (places[0].geometry.viewport.f.b+places[0].geometry.viewport.f.f)/2;
          var map_lng = (places[0].geometry.viewport.b.b+places[0].geometry.viewport.b.f)/2;
          var addCafeData = { 
            "map_neighborhood": map_neighborhood,
            "map_street": map_street,
            "map_addr": map_addr,
            "map_name": map_name,
            "map_lat": map_lat,
            "map_lng": map_lng
          }

          this.props.mapSelect(addCafeData);


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
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={13}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
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
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Find a cafe..."
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
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}
  </GoogleMap>
);

const mapStateToProps = state => {
    console.log(state);
    const cafes = _.map(state.cafes, (val, uid) => {
        return { ...val, uid };
    });

    return { cafes };
};

export default connect(mapStateToProps, actions)(AddSearchWrapper);