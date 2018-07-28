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
            attribute: ""
        }
    }

    componentWillReceiveProps(newProps) {
    }

    componentWillMount() {
        this.setState({ attribute: this.props.attribute });
    }

    render () {
        return (
            <div class='modalButtonPanel'>
                <AddAttrButton attribute={this.state.attribute} level={0} />
                <AddAttrButton attribute={this.state.attribute} level={1} />
                <AddAttrButton attribute={this.state.attribute} level={2} />
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
