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
import Search from './components/Search';
import SortBar from './components/SortBar';
import MapWrapper from './components/MapWrapper';
import AddCafeModal from './components/AddCafeModal';

const MAPAPIKEY = "AIzaSyCOVCDo4noFBDxGblbuw8XUomeXGo3AEXE";

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

    onOpenModal = () => {
        this.setState({ open: true });
    };
    
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <div className="App">
                    <div class='s_allContent'>
                        <div class='s_topSpace'>
                            <div class='s_splitscreen'>
                                <div class='s_main'>
                                    <div class='s_header'>
                                        <div><p class='t_header'>☕ coffeelist_sf</p></div>
                                        <div><button onClick={this.onOpenModal}>Add Cafe</button></div>
                                    </div>
                                    <div>
                                        <Modal open={this.state.open} onClose={this.onCloseModal} center>
                                            <AddCafeModal />
                                        </Modal>
                                    </div>
                                    <SortBar />
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
