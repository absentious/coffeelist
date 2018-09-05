import React, { Component } from 'react';
import '../App.css';
import { Marker } from "react-google-maps";
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
            this.props.clearCafe();
        }
        else {
            this.props.selectCafe(this.state.cafe.name+" "+this.state.cafe.address.street);
            this.props.setCenter(this.state.cafe.lat, this.state.cafe.lng);
        }
    }

    displayMarker() {
        if (this.props.selected) {
            return (
                <Marker 
                    onClick={this.selectionProcess.bind(this)}
                    icon={{ 
                        url: "http://ayh.io/images/pin_selected.png",
                        scale: 3 
                    }}
                    position={{ lat: this.state.cafe.lat, lng: this.state.cafe.lng }} 
                    zIndex={1000}
                />
            )
        }
        else {
            return (
                <Marker 
                    onClick={this.selectionProcess.bind(this)}
                    icon={{ 
                        url: "http://ayh.io/images/pin_general.png",
                        scale: 2
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
    const selectIdentifier = ownProps.cafe.name + " " + ownProps.cafe.address.street;
    const selected = selectIdentifier === state.selectedName;
    return { selected };
};

export default connect(mapStateToProps, actions)(MarkerWrapper);