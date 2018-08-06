import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import CafeNeighborhood from './CafeNeighborhood';
import CafeAttributes from './CafeAttributes';
import CafeName from './CafeName';

class CafeItem extends Component {
    constructor () {
        super()

        this.state = {
            cafe: {},
            name: "",
            neighborhood: "",
            expanded: false,
            ref: ""
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ cafe: _.clone(newProps.cafe, true), name: newProps.cafe.name, neighborhood: newProps.cafe.neighborhood });
        var divID = '#' + this.id;
    }

    componentWillMount() {
        this.setState({ 
            cafe: this.props.cafe, 
            name: this.props.cafe.name, 
            neighborhood: this.props.cafe.neighborhood,
            ref: this.props.cafe.name + " " + this.props.cafe.address.street
         });
    }

    scrollToElementD(){
        //var topPos = document.getElementById('s_list').offsetTop;
        var scrollElement = document.getElementById(this.props.selectedName);
        scrollElement.scrollIntoView();
        
    }

    displayHorizontalAttributes() {
        //if this.props.selected == false
        if (true) {
            return <CafeAttributes 
                outlets={this.state.cafe.attributes.outlets}
                coffee={this.state.cafe.attributes.coffee}
                wifi={this.state.cafe.attributes.wifi}
                food={this.state.cafe.attributes.food}
                drinks={this.state.cafe.attributes.drinks}
                vibe={this.state.cafe.attributes.vibe}
                loft={this.state.cafe.attributes.lofr}
                vertical={false}
            />;
        }
        return <div class='cafe_pad32'></div>;
    }

    displayVerticalAttributes() {

        if (this.props.selected) {
            this.scrollToElementD();
            return <CafeAttributes 
                outlets={this.state.cafe.attributes.outlets}
                coffee={this.state.cafe.attributes.coffee}
                wifi={this.state.cafe.attributes.wifi}
                food={this.state.cafe.attributes.food}
                drinks={this.state.cafe.attributes.drinks}
                vibe={this.state.cafe.attributes.vibe}
                loft={this.state.cafe.attributes.loft}
                vertical={true}
            />;
        }
        return;
    }

    displayAddress() {
        if (this.props.selected) {



            return (
                <div>
                    <div class='cafeAddress'>
                        <p class='cafeAddress_text t_bold'>
                            {this.state.cafe.neighborhood} </p>
                        <p class='cafeAddress_text t_light'>
                            {this.state.cafe.address.street} <br />
                            {this.state.cafe.address.citystate} <br />
                            {this.state.cafe.address.zip}
                        </p>
                    </div>
                </div>
            )
        }
    }

    displayAddress_m() {
        if (this.props.selected) {
            return (
                <div>
                    <div class='m_cafeAddress'>
                        <p class='cafeAddress_text'>
                            {this.state.cafe.address.street} <br />
                            {this.state.cafe.address.citystate} <br />
                            {this.state.cafe.address.zip}
                        </p>
                    </div>
                </div>
            )
        }
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

    distance(lat1, lon1, lat2, lon2, unit) {
        //console.log(lat1);
        //console.log(lon1);
        //console.log(lat2);
        //console.log(lon2);
        
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist.toFixed(1);
    }

    render () {
        return (
            <div class='cafeRow_container cafePad' id={this.state.cafe.name + " " + this.state.cafe.address.street} >
                <div class='cafeRow' onClick={this.selectionProcess.bind(this)}>
                    <div class='cafeDistance'>
                        <p class='cafeDistance_text t_light'>{this.distance(this.state.cafe.lat, this.state.cafe.lng, this.props.lat, this.props.lng, "M")} mi</p>
                    </div>
                    <CafeName name={this.state.name}>
                        {this.displayAddress()}
                        {this.displayVerticalAttributes()}
                    </CafeName>
                    {this.displayHorizontalAttributes()}
                    
                    <div class='cafeArrow_container'>
                        <div class='cafeArrow'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const selectIdentifier = ownProps.cafe.name + " " + ownProps.cafe.address.street;
    const selected = selectIdentifier === state.selectedName;
    const selectedName = state.selectedName;
    const sortFlag = state.sortFlag;
    const lat = state.location.lat;
    const lng = state.location.lng;

    return { selected, sortFlag, lat, lng, selectedName };
};



export default connect(mapStateToProps, actions)(CafeItem);
