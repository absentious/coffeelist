import _ from 'lodash';
import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AddCafeModal from './components/AddCafeModal';


class CafeList extends Component {
    constructor () {
        super();
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render () {
        return (
            <Modal open={this.state.open} onClose={this.onCloseModal} center>
                <AddCafeModal />
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    const cafes = _.map(state.cafes, (val, uid) => {
        return { ...val, uid };
    });

    return { cafes };
};

export default connect(mapStateToProps, actions)(CafeList);
