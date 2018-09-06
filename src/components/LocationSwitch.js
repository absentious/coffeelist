import _ from 'lodash';
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import Media from "react-media";
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import Select from 'react-select';
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
    singleValue: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '12px', 
        fontFamily: 'Source Code Pro', 
        fontWeight: 600,
        fontSize: '20px'
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
    control: styles => ({...styles, width: '12rem', height: '48px', color: '#4B3434', backgroundColor: '#F8F4F4'}),
};

const selectStyles14 = {
    option: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '16px', 
        backgroundColor: '#F8F4F4', 
        fontFamily: 'Source Code Pro', 
        fontWeight: 600,
        fontSize: '14px',
        padding: '12px'
    }),
    singleValue: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '8px', 
        fontFamily: 'Source Code Pro', 
        fontWeight: 600,
        fontSize: '14px'
    }),
    placeholder: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '16px', 
        fontFamily: 'Source Code Pro', 
        fontSize: '14px',
        opacity: '0.54',
        padding: '8px'
        
    }),
    menu: styles => ({...styles, backgroundColor: '#F8F4F4', border: 'none'}),
    valueContainer: styles => ({...styles, height: '24px', color: '#4B3434', backgroundColor: '#F8F4F4'}),
    control: styles => ({...styles, width: '10rem', height: '36px', color: '#4B3434', backgroundColor: '#F8F4F4'}),
};

const selectStyles12 = {
    option: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '12px', 
        backgroundColor: '#F8F4F4', 
        fontFamily: 'Source Code Pro', 
        fontWeight: 600,
        fontSize: '12px',
        padding: '8px'
    }),
    singleValue: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '8px', 
        fontFamily: 'Source Code Pro', 
        fontWeight: 600,
        fontSize: '12px'
    }),
    placeholder: styles => ({
        ...styles, 
        color: '#4B3434', 
        paddingLeft: '12px', 
        fontFamily: 'Source Code Pro', 
        fontSize: '12px',
        opacity: '0.54',
        padding: '8px'
        
    }),
    menu: styles => ({...styles, backgroundColor: '#F8F4F4', border: 'none'}),
    valueContainer: styles => ({...styles, height: '24px', color: '#4B3434', backgroundColor: '#F8F4F4'}),
    control: styles => ({...styles, width: '8rem', height: '36px', color: '#4B3434', backgroundColor: '#F8F4F4'}),
};

class LocationSwitch extends Component {



    constructor () {
        super();

        this.state = {
            add: false,
            options: [
                { value: 'San Francisco', label: 'San Francisco' },
                { value: 'Los Angeles', label: 'Los Angeles' },
                { value: 'New York City', label: 'New York City' }
            ],
            selectedOption: { value: 'San Francisco', label: 'San Francisco' }
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
        this.props.cityCheck("San Francisco");
    }

    componentDidMount() {
        this.switchCity("San Francisco");
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
        this.props.clearSelectedCafe();
        this.props.cityCheck(city);
    }

    handleChange = (selectedOption) => {
        this.switchCity(selectedOption.label);
        this.setState({ selectedOption: selectedOption });
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
                <div class='cafeSwitch_text'>
                    <p class='cafeName_text t_light t_tagline'>I am working in </p>
                </div>
                <Media query="(max-width: 480px)">
                    {matches =>
                        matches ? (
                            <Media query="(max-width: 480px)">
                                {matches =>
                                    matches ? (
                                        <Select
                                            defaultValue={{ label: 'San Francisco', value: 'San Francisco' }}
                                            placeholder={<p class='cafeName_text t_light'>{this.props.city.name}</p>}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            value={this.state.selectedOption}
                                            onChange={this.handleChange}
                                            options={this.state.options}
                                            styles={selectStyles12}
                                        />
                                    ) : (
                                        <Select
                                            defaultValue={{ label: 'San Francisco', value: 'San Francisco' }}
                                            placeholder={<p class='cafeName_text t_light'>{this.props.city.name}</p>}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            value={this.state.selectedOption}
                                            onChange={this.handleChange}
                                            options={this.state.options}
                                            styles={selectStyles14}
                                        />
                                    )
                                }
                            </Media>
                        ) : (
                            <Select
                                defaultValue={{ label: 'San Francisco', value: 'San Francisco' }}
                                placeholder={<p class='cafeName_text t_light'>{this.props.city.name}</p>}
                                className="basic-single"
                                classNamePrefix="select"
                                value={this.state.selectedOption}
                                onChange={this.handleChange}
                                options={this.state.options}
                                styles={selectStyles}
                            />
                        )
                    }
                </Media>
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



