import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class MarkerWrapper extends Component {
    constructor () {
        super();

        this.state = {
            cafe: {},
            selected: false
        }
    }

    componentWillMount() {
        this.setState({ cafe: this.props.cafe });
    }

    selectionProcess() {
        if (this.props.selected) {
            this.props.clearCafe()
        }
        else {
            this.props.selectCafe(this.state.cafe.name)
        }
    }

    displayMarker() {
        if (this.props.selected) {
            return (
                <Marker 
                    onClick={this.selectionProcess.bind(this)}
                    icon={{ 
                        url: "http://maps.google.com/mapfiles/ms/icons/red.png",
                        scale: 3 
                    }}
                    position={{ lat: this.state.cafe.lat, lng: this.state.cafe.lng }} 
                />
            )
        }
        else {
            return (
                <Marker 
                    onClick={this.selectionProcess.bind(this)}
                    icon={{ 
                        url: "http://maps.google.com/mapfiles/ms/icons/blue.png",
                        scale: 3 
                    }}
                    position={{ lat: this.state.cafe.lat, lng: this.state.cafe.lng }} 
                />
            )
        }
    }

    render() {
        return (
            <div class='mapMarker'>
                {this.displayMarker()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const selected = ownProps.cafe.name === state.selectedName;
    return { selected };
};

export default connect(mapStateToProps, actions)(MarkerWrapper);