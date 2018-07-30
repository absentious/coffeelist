import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import AddAttrButton from './AddAttrButton';


class CafeList extends Component {
    constructor () {
        super();
        this.state = {
            attribute: "",
            values: {}
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
        this.setState({ attribute: this.props.attribute, values: this.props.values });
    }

    render () {
        return (
            <div class='modalButtonPanel'>
                {this.props.values.map(val => <AddAttrButton attribute={this.state.attribute} level={val} />)}
            </div>
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
