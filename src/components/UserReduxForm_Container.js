import _ from 'lodash';
import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import UserReduxForm from './UserReduxForm';
import AddCafeButton from './AddCafeButton';



class UserReduxForm_Container extends Component {
    constructor () {
        super();

        this.state = {
            open: false
        }
    }

    componentWillMount() {
    }

    loginSubmit = values => {
        // print the form values to the console
        var email = values.email;
        var password = values.password;
        console.log({ email, password });
        this.props.loginUser({ email, password});
    }

    logout() {
        this.props.logoutUser();
    }

    displayForm() {
        if (this.props.auth.user) {
            return (
                <div class='form_flow'>
                    <AddCafeButton />
                    <div class='form_input_holder'>
                        <button onClick={this.logout.bind(this)}>logout</button>
                    </div>
                </div>
            )
        }
        else {
            return <UserReduxForm onSubmit={this.loginSubmit} />
        }
    }

    render () {
        return (
            <div>
                {this.displayForm()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const auth = state.auth;

    return { auth };
};

export default connect(mapStateToProps, actions)(UserReduxForm_Container);
