import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AddAttrButtonPanel from './AddAttrButtonPanel';
import AddSearchWrapper from './AddSearchWrapper';
import CafeNeighborhood from './CafeNeighborhood';


class AddCafeModal extends Component {
    constructor () {
        super();
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
        this.props.mapClear();
    }

    render () {
        return (
            <div class='s_modal'>
                <p class='t_header'>Add New Cafe</p>
                <div class='modalMainSplit'>
                    <AddSearchWrapper />
                    <div class='modalCurrent'>
                        <div class='cafeNeighborhood_bg'>
                            <p class='cafeNeighborhood_text'>{this.props.addCafeData.map_neighborhood}</p>
                        </div>
                        <p class='cafeName_text'>{this.props.addCafeData.map_name}</p>
                        <p class='cafeName_text'>{this.props.addCafeData.map_street}</p>
                        <p class='cafeName_text'>{this.props.addCafeData.map_addr}</p>
                    </div>
                </div>
                <div class='modalSplitVertical'>
                    <div>
                        <div class='cafeNeighborhood_bg modalSubtitle'>
                            <p class='cafeNeighborhood_text'>Main Attributes (required)</p>
                        </div>
                    </div>
                    <div class='modalSplit'>
                        <AddAttrButtonPanel attribute='outlets' values={[0,1,2]} />
                        <AddAttrButtonPanel attribute='wifi' values={[0,1,2]} />
                        <AddAttrButtonPanel attribute='food' values={[0,1,2]} />
                    </div>
                    <div>
                        <div class='cafeNeighborhood_bg modalSubtitle'>
                            <p class='cafeNeighborhood_text'>Optional Attributes</p>
                        </div>
                    </div>
                    <div class='modalSplit'>
                        <AddAttrButtonPanel attribute='coffee' values={[1]} />
                        <AddAttrButtonPanel attribute='vibe' values={[1,2]} />
                        <AddAttrButtonPanel attribute='drinks' values={[1]} />
                        <AddAttrButtonPanel attribute='loft' values={[1]} />
                    </div>
                    <div class='modalSubmit'>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);

    const addCafeData = state.modalAttr.addCafeData

    return { addCafeData };
};

export default connect(mapStateToProps, actions)(AddCafeModal);
