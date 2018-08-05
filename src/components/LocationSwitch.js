import _ from 'lodash';
import React, { Component } from 'react';
import Select from 'react-select';
import Modal from 'react-responsive-modal';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AddCafeModal from './AddCafeModal';



const selectStyles = {
    option: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '24px', 
        backgroundColor: '#F8F4F4', 
        fontFamily: 'Source Code Pro', 
        fontWeight: 600,
        fontSize: '20px',
        padding: '12px'
    }),
    placeholder: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '24px', 
        fontFamily: 'Source Code Pro', 
        fontSize: '20px',
        opacity: '0.54',
        padding: '12px'
        
    }),
    menu: styles => ({...styles, backgroundColor: '#F8F4F4', border: 'none'}),
    valueContainer: styles => ({...styles, height: '36px', color: '#4B3434', backgroundColor: '#F8F4F4'}),
    control: styles => ({...styles, width: '20rem', height: '48px', color: '#4B3434', backgroundColor: '#F8F4F4'}),
};

class LocationSwitch extends Component {



    constructor () {
        super();

        this.state = {
            add: false,
            options: [
                { value: 'SF', label: 'San Francisco' },
                { value: 'LA', label: 'Los Angeles' },
                { value: 'NY', label: 'New York City' },
                { value: 'LDN', label: 'London' }
            ]
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
        this.props.cityCheck("San Francisco");
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

    handleChange = (selectedOption) => {
        this.switchCity(selectedOption.label);
        console.log(`Option selected:`, selectedOption);
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
                <div>
                    <p class='cafeName_text t_light t_tagline'>I am working in </p>
                </div>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    value={this.props.city.name}
                    defaultValue={this.state.options[0]}
                    placeholder={this.props.city.name}
                    onChange={this.handleChange}
                    options={this.state.options}
                    styles={selectStyles}
                />
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



