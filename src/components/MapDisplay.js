import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { EMPLOYEE_SAVE_DONE } from '../../../../../reactnativeworkspace/prod/manager/src/actions/types';

class MapDisplay extends Component {
    constructor () {
        super()
        var map;
    }

    componentWillMount() {
    }

    initMap() {
        // The location of Uluru
        var uluru = {lat: -25.344, lng: 131.036};
        // The map, centered at Uluru
        //var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
        // The marker, positioned at Uluru
       // var marker = new google.maps.Marker({position: uluru, map: map});
    }

    render () {
        return (
            <div>
                <div id="map"></div>
                <script 
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCOVCDo4noFBDxGblbuw8XUomeXGo3AEXE&callback=initMap" 
                    async 
                    defer
                >
                </script>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, actions)(MapDisplay);
