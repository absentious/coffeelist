import _ from 'lodash';
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AddCafeModal from './AddCafeModal';



class LocationSwitch extends Component {
    constructor () {
        super();

        this.state = {
            add: false
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
    }

    updateEmail(text) {
        console.log(text);
    }

    displayAddButton() {
        if (this.state.add) {
            return (
                <div class='openModalButton' onClick={this.onOpenModal}>
                    <p class='openModalButton_text' >+ add cafe</p>
                </div>
            )
        }
    }

    switchCity(city) {
        console.log(city);
        this.props.cityCheck(city);
    }

    displayLocButton(city, abbr) {
        const selectedCity = city === this.props.city.name;

        if (selectedCity) {
            return (
                <div class='locButton' onClick={this.switchCity.bind(this, city)}>
                    <p class='locButton_text' >{abbr}</p>
                </div>
            )
        }
        else {
            return(
                <div class='locButton_inactive' onClick={this.switchCity.bind(this, city)}>
                    <p class='locButton_text_inactive' >{abbr}</p>
                </div>
            )
        }
    }

    render () {
        return (
            <div class='s_location'>
                <div class='form_flow'>
                    {this.displayLocButton("San Francisco", "SF")}
                    {this.displayLocButton("Los Angeles", "LA")}
                    {this.displayLocButton("New York City", "NYC")}
                    {this.displayLocButton("London", "LDN")}
                    {this.displayLocButton("Tokyo", "TYO")}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const city = state.city;
    console.log(city);
    return { city };
};

export default connect(mapStateToProps, actions)(LocationSwitch);


