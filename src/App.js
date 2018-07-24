import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';
import CafeList from './components/CafeList';

class App extends Component {

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
            <Provider store={createStore(reducers)}>
                <div className="App">
                    <div class='s_allContent'>
                        <div class='s_topSpace'>
                            <div class='s_header'>
                                <p class='t_header'>coffeelist_sf</p>
                            </div>
                            <div class='s_search searchBox'>
                        
                            </div>
                            <CafeList />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
