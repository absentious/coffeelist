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

    render () {
        return (
            <div class='s_location'>
                <div class='form_flow'>
                    <div class='locButton' onClick={this.switchCity.bind(this, "San Francisco")}>
                        <p class='locButton_text' >SF</p>
                    </div>
                    <div class='locButton' onClick={this.switchCity.bind(this, "Los Angeles")}>
                        <p class='locButton_text' >LA</p>
                    </div>
                    <div class='locButton' onClick={this.switchCity.bind(this, "New York City")}>
                        <p class='locButton_text' >NYC</p>
                    </div>
                    <div class='locButton' onClick={this.switchCity.bind(this, "Tokyo")}>
                        <p class='locButton_text' >TYO</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const modalOpen = state.modalOpen.open;

    return { modalOpen };
};

export default connect(mapStateToProps, actions)(LocationSwitch);


