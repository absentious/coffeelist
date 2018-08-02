import React, { Component } from 'react';
import '../App.css';
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

    submitNewCafe() {
        var { map_name, map_street, map_citystate, map_zip, map_neighborhood, map_lat, map_lng } = this.props.addCafeData;
        console.log(this.props);
        var cafeStructured = {
            name: map_name,
            address: {
                street: map_street,
                street2: "",
                citystate: map_citystate,
                zip: map_zip
            },
            neighborhood: map_neighborhood,
            attributes: {
                outlets: this.props.modalAttr.outlets,
                wifi: this.props.modalAttr.wifi,
                coffee: this.props.modalAttr.coffee,
                food: this.props.modalAttr.food,
                loft: this.props.modalAttr.loft,
                vibe: this.props.modalAttr.vibe,
                drinks: this.props.modalAttr.drinks
            },
            lat: map_lat,
            lng: map_lng
        }

        this.props.addCafe(cafeStructured, this.props.city.name);
        this.props.closeModal();
    }

    render () {
        return (
            <div class='s_modal'>
                <p class='t_header'>add new cafe</p>
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
                    <div class='modalSubmit' onClick={this.submitNewCafe.bind(this)}>
                        <p class='openModalButton_text' >submit cafe</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);

    const addCafeData = state.modalAttr.addCafeData;
    const modalAttr = state.modalAttr;
    const city = state.city;

    return { addCafeData, modalAttr, city };
};

export default connect(mapStateToProps, actions)(AddCafeModal);
