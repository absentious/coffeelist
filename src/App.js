import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import logo from './logo.svg';
import './App.css';
import CafeList from './components/CafeList';
import SortBar from './components/SortBar';
import MapWrapper from './components/MapWrapper';
import AddCafeButton from './components/AddCafeButton';
import AddCafeModal_Container from './components/AddCafeModal_Container';
import UserReduxForm_Container from './components/UserReduxForm_Container';

import iconData from './data/attributeIcons.json';
import LocationSwitch from './components/LocationSwitch';

class App extends Component {

    constructor() {
        super();

        this.state = {
            open: false
        }
    }

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBRw1I9CcdfqHRcZSCyLXMRAmGihSH9mco",
            authDomain: "coffee-49b01.firebaseapp.com",
            databaseURL: "https://coffee-49b01.firebaseio.com",
            projectId: "coffee-49b01",
            storageBucket: "coffee-49b01.appspot.com",
            messagingSenderId: "779895610961"
        };
        firebase.initializeApp(config);

    }



    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <div className="App">
                    <div class='s_allContent'>
                        <div class='s_topSpace'>
                            <div class='s_splitscreen'>
                                <div class='s_main'>
                                    <div class='s_header'>
                                        <div class='s_header_verticalflow'>
                                            <div class='s_header_divide'>
                                                <div class='s_header_icon'><svg class='cafe_icon_black' xmlns="http://www.w3.org/2000/svg" width='48' height='48' viewBox="0 0 24 24">
                                                    <path d={iconData.coffee[0].svg} />
                                                </svg></div>
                                                <div class='s_header_icon_m'><svg class='cafe_icon_black' xmlns="http://www.w3.org/2000/svg" width='32' height='32' viewBox="0 0 24 24">
                                                    <path d={iconData.coffee[0].svg} />
                                                </svg></div>
                                                <div class='s_header_title'>
                                                    <img class='i_titlebanner' src='http://ayh.io/images/bannertemp.png' />
                                                </div>
                                            </div>
                                            <LocationSwitch />
                                        </div>
                                    </div>
                                    <div>
                                        <AddCafeModal_Container />
                                    </div>
                                    <SortBar />
                                </div>
                                <div class='s_user'>
                                    <UserReduxForm_Container />
                                </div>
                            </div>
                            <div class='s_splitscreen'>
                                <div class='s_main'>
                                    <CafeList />
                                </div>
                                <div class='s_map'>
                                    <MapWrapper />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
