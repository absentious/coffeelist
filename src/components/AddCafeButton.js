import _ from 'lodash';
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AddCafeModal from './AddCafeModal';



class AddCafeButton extends Component {
    constructor () {
        super();

        this.state = {
            open: false
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
    }

    onOpenModal = () => {
        this.props.openModal();
    };

    render () {
        return (
            <div class='openModalButton' onClick={this.onOpenModal}>
                <p class='openModalButton_text' >+ add cafe</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const modalOpen = state.modalOpen.open;

    return { modalOpen };
};

export default connect(mapStateToProps, actions)(AddCafeButton);
