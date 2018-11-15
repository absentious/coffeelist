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
import MapWrapperMobile from './components/MapWrapperMobile';
import AddCafeButton from './components/AddCafeButton';
import AddCafeModal_Container from './components/AddCafeModal_Container';
import UserReduxForm_Container from './components/UserReduxForm_Container';
import ReactGA from 'react-ga';

import iconData from './data/attributeIcons.json';
import LocationSwitch from './components/LocationSwitch';


class App extends Component {

    constructor() {
        super();

        this.state = {
            open: false,
            reactGaInitialized: false,
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
        document.title = 'caffinity - your cafe grind resource'

    }

    componentDidMount() {
        if (!this.state.reactGaInitialized) {
            ReactGA.initialize('UA-129274213-1');
            this.setState({reactGaInitialized: true})
        }
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <div className="App">
                    <div class='s_allContent'>
                        <div class='s_splitscreen'>
                            <div class='s_topSpace'>
                                <div class='s_main'>
                                    <div class='s_header'>
                                        <div class='s_header_verticalflow'>
                                            <div class='s_header_divide'>
                                                <div class='s_header_icon'><svg class='cafe_icon_black' xmlns="http://www.w3.org/2000/svg" width='60' height='60' viewBox="0 0 24 24">
                                                    <path d={iconData.coffee[0].svg} />
                                                </svg></div>
                                                <div class='s_header_icon_m'><svg class='cafe_icon_black' xmlns="http://www.w3.org/2000/svg" width='24' height='24' viewBox="0 0 24 24">
                                                    <path d={iconData.coffee[0].svg} />
                                                </svg></div>
                                                <div class='s_header_title'>
                                                    <svg width="288" height="78" viewBox="0 0 515 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M36 50.8C45.04 50.8 51.84 52.52 56.4 55.96C60.96 59.4 63.8 63.88 64.92 69.4L45.96 75.64C45.16 68.76 42.08 65.32 36.72 65.32C28.8 65.32 24.84 70.96 24.84 82.24C24.84 93.2 28.8 98.68 36.72 98.68C42.4 98.68 45.72 95.44 46.68 88.96L65.04 94.84C64.16 100.28 61.24 104.72 56.28 108.16C51.4 111.52 44.92 113.2 36.84 113.2C26.44 113.2 18.44 110.48 12.84 105.04C7.24 99.6 4.44 91.92 4.44 82C4.44 72.16 7.2 64.52 12.72 59.08C18.32 53.56 26.08 50.8 36 50.8ZM133.835 100.36C135.355 100.36 136.595 100.2 137.555 99.88L135.995 111.28C133.675 112.56 130.955 113.2 127.835 113.2C119.195 113.2 114.035 110.12 112.355 103.96C108.755 110.12 101.635 113.2 90.9947 113.2C84.9947 113.2 80.3947 111.92 77.1947 109.36C73.9947 106.8 72.3947 103.08 72.3947 98.2C72.3947 93.08 74.1947 88.96 77.7947 85.84C81.4747 82.64 87.4747 80.2 95.7947 78.52L109.355 75.88V73.72C109.355 71 108.595 68.84 107.075 67.24C105.555 65.64 103.475 64.84 100.835 64.84C97.7947 64.84 95.3147 65.56 93.3947 67C91.4747 68.44 90.2347 70.8 89.6747 74.08L73.1147 69.28C74.1547 63.44 77.0347 58.92 81.7547 55.72C86.4747 52.44 92.8347 50.8 100.835 50.8C110.195 50.8 117.315 52.72 122.195 56.56C127.075 60.4 129.515 66.16 129.515 73.84V95.68C129.515 98.8 130.955 100.36 133.835 100.36ZM98.4347 100C101.235 100 103.755 99.24 105.995 97.72C108.235 96.12 109.355 94.04 109.355 91.48V86.32L99.6347 88.6C97.0747 89.24 95.2347 90.04 94.1147 91C93.0747 91.88 92.5547 93.16 92.5547 94.84C92.5547 96.52 93.0747 97.8 94.1147 98.68C95.1547 99.56 96.5947 100 98.4347 100ZM168.647 52H186.887V66.52H169.847V112H149.447V66.52H139.847V52H149.447V46.48C149.447 39.28 151.687 33.88 156.167 30.28C160.647 26.68 166.487 24.88 173.687 24.88C179.927 24.88 184.527 26.04 187.487 28.36L185.447 41.08C183.687 39.8 181.407 39.16 178.607 39.16C171.967 39.16 168.647 42.04 168.647 47.8V52ZM213.53 52H231.77V66.52H214.73V112H194.33V66.52H184.73V52H194.33V46.48C194.33 39.28 196.57 33.88 201.05 30.28C205.53 26.68 211.37 24.88 218.57 24.88C224.81 24.88 229.41 26.04 232.37 28.36L230.33 41.08C228.57 39.8 226.29 39.16 223.49 39.16C216.85 39.16 213.53 42.04 213.53 47.8V52ZM250.25 45.04C246.09 45.04 243.05 44.28 241.13 42.76C239.29 41.16 238.37 38.68 238.37 35.32C238.37 31.88 239.29 29.4 241.13 27.88C243.05 26.28 246.09 25.48 250.25 25.48C254.41 25.48 257.41 26.28 259.25 27.88C261.17 29.4 262.13 31.88 262.13 35.32C262.13 38.68 261.17 41.16 259.25 42.76C257.41 44.28 254.41 45.04 250.25 45.04ZM260.45 112H240.05V52H260.45V112ZM314.336 50.8C320.656 50.8 325.696 52.64 329.456 56.32C333.216 60 335.096 65.24 335.096 72.04V112H314.696V77.68C314.696 73.6 313.936 70.72 312.416 69.04C310.976 67.28 308.896 66.4 306.176 66.4C302.976 66.4 300.376 67.56 298.376 69.88C296.376 72.12 295.376 75.6 295.376 80.32V112H274.976V52H293.216L293.816 63.52C295.736 59.28 298.456 56.12 301.976 54.04C305.496 51.88 309.616 50.8 314.336 50.8ZM359.59 45.04C355.43 45.04 352.39 44.28 350.47 42.76C348.63 41.16 347.71 38.68 347.71 35.32C347.71 31.88 348.63 29.4 350.47 27.88C352.39 26.28 355.43 25.48 359.59 25.48C363.75 25.48 366.75 26.28 368.59 27.88C370.51 29.4 371.47 31.88 371.47 35.32C371.47 38.68 370.51 41.16 368.59 42.76C366.75 44.28 363.75 45.04 359.59 45.04ZM369.79 112H349.39V52H369.79V112ZM427.872 108.64C425.872 110 423.312 111.12 420.192 112C417.152 112.8 414.072 113.2 410.952 113.2C403.832 113.2 398.392 111.68 394.632 108.64C390.872 105.6 388.952 100.72 388.872 94V66.52H378.552V52H388.872V38.56L409.272 32.92V52H427.272V66.52H409.272V90.64C409.272 96 411.912 98.68 417.192 98.68C420.472 98.68 423.352 97.8 425.832 96.04L427.872 108.64ZM475.581 112C473.341 118.4 470.901 123.48 468.261 127.24C465.621 131 462.501 133.68 458.901 135.28C455.301 136.96 450.941 137.8 445.821 137.8C439.021 137.8 433.581 136.32 429.501 133.36L433.821 119.68C435.101 120.88 436.501 121.68 438.021 122.08C439.621 122.56 441.661 122.8 444.141 122.8C446.621 122.8 448.581 122.36 450.021 121.48C451.461 120.68 452.621 119.2 453.501 117.04L454.941 113.32L447.981 97L430.101 52H452.541L461.781 86.2L464.661 98.92L467.901 85.72L477.141 52H497.541L475.581 112ZM506.775 91.36C510.535 91.36 513.455 92.32 515.535 94.24C517.695 96.16 518.775 98.84 518.775 102.28C518.775 105.64 517.695 108.28 515.535 110.2C513.455 112.12 510.535 113.08 506.775 113.08C503.015 113.08 500.055 112.12 497.895 110.2C495.815 108.28 494.775 105.64 494.775 102.28C494.775 98.84 495.815 96.16 497.895 94.24C500.055 92.32 503.015 91.36 506.775 91.36Z" transform="translate(-4 -24)" fill="#3B3434"/>
                                                    </svg>
                                                </div>
                                                <div class='s_header_title_m'>
                                                    <svg width="114" height="32" viewBox="0 0 515 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M36 50.8C45.04 50.8 51.84 52.52 56.4 55.96C60.96 59.4 63.8 63.88 64.92 69.4L45.96 75.64C45.16 68.76 42.08 65.32 36.72 65.32C28.8 65.32 24.84 70.96 24.84 82.24C24.84 93.2 28.8 98.68 36.72 98.68C42.4 98.68 45.72 95.44 46.68 88.96L65.04 94.84C64.16 100.28 61.24 104.72 56.28 108.16C51.4 111.52 44.92 113.2 36.84 113.2C26.44 113.2 18.44 110.48 12.84 105.04C7.24 99.6 4.44 91.92 4.44 82C4.44 72.16 7.2 64.52 12.72 59.08C18.32 53.56 26.08 50.8 36 50.8ZM133.835 100.36C135.355 100.36 136.595 100.2 137.555 99.88L135.995 111.28C133.675 112.56 130.955 113.2 127.835 113.2C119.195 113.2 114.035 110.12 112.355 103.96C108.755 110.12 101.635 113.2 90.9947 113.2C84.9947 113.2 80.3947 111.92 77.1947 109.36C73.9947 106.8 72.3947 103.08 72.3947 98.2C72.3947 93.08 74.1947 88.96 77.7947 85.84C81.4747 82.64 87.4747 80.2 95.7947 78.52L109.355 75.88V73.72C109.355 71 108.595 68.84 107.075 67.24C105.555 65.64 103.475 64.84 100.835 64.84C97.7947 64.84 95.3147 65.56 93.3947 67C91.4747 68.44 90.2347 70.8 89.6747 74.08L73.1147 69.28C74.1547 63.44 77.0347 58.92 81.7547 55.72C86.4747 52.44 92.8347 50.8 100.835 50.8C110.195 50.8 117.315 52.72 122.195 56.56C127.075 60.4 129.515 66.16 129.515 73.84V95.68C129.515 98.8 130.955 100.36 133.835 100.36ZM98.4347 100C101.235 100 103.755 99.24 105.995 97.72C108.235 96.12 109.355 94.04 109.355 91.48V86.32L99.6347 88.6C97.0747 89.24 95.2347 90.04 94.1147 91C93.0747 91.88 92.5547 93.16 92.5547 94.84C92.5547 96.52 93.0747 97.8 94.1147 98.68C95.1547 99.56 96.5947 100 98.4347 100ZM168.647 52H186.887V66.52H169.847V112H149.447V66.52H139.847V52H149.447V46.48C149.447 39.28 151.687 33.88 156.167 30.28C160.647 26.68 166.487 24.88 173.687 24.88C179.927 24.88 184.527 26.04 187.487 28.36L185.447 41.08C183.687 39.8 181.407 39.16 178.607 39.16C171.967 39.16 168.647 42.04 168.647 47.8V52ZM213.53 52H231.77V66.52H214.73V112H194.33V66.52H184.73V52H194.33V46.48C194.33 39.28 196.57 33.88 201.05 30.28C205.53 26.68 211.37 24.88 218.57 24.88C224.81 24.88 229.41 26.04 232.37 28.36L230.33 41.08C228.57 39.8 226.29 39.16 223.49 39.16C216.85 39.16 213.53 42.04 213.53 47.8V52ZM250.25 45.04C246.09 45.04 243.05 44.28 241.13 42.76C239.29 41.16 238.37 38.68 238.37 35.32C238.37 31.88 239.29 29.4 241.13 27.88C243.05 26.28 246.09 25.48 250.25 25.48C254.41 25.48 257.41 26.28 259.25 27.88C261.17 29.4 262.13 31.88 262.13 35.32C262.13 38.68 261.17 41.16 259.25 42.76C257.41 44.28 254.41 45.04 250.25 45.04ZM260.45 112H240.05V52H260.45V112ZM314.336 50.8C320.656 50.8 325.696 52.64 329.456 56.32C333.216 60 335.096 65.24 335.096 72.04V112H314.696V77.68C314.696 73.6 313.936 70.72 312.416 69.04C310.976 67.28 308.896 66.4 306.176 66.4C302.976 66.4 300.376 67.56 298.376 69.88C296.376 72.12 295.376 75.6 295.376 80.32V112H274.976V52H293.216L293.816 63.52C295.736 59.28 298.456 56.12 301.976 54.04C305.496 51.88 309.616 50.8 314.336 50.8ZM359.59 45.04C355.43 45.04 352.39 44.28 350.47 42.76C348.63 41.16 347.71 38.68 347.71 35.32C347.71 31.88 348.63 29.4 350.47 27.88C352.39 26.28 355.43 25.48 359.59 25.48C363.75 25.48 366.75 26.28 368.59 27.88C370.51 29.4 371.47 31.88 371.47 35.32C371.47 38.68 370.51 41.16 368.59 42.76C366.75 44.28 363.75 45.04 359.59 45.04ZM369.79 112H349.39V52H369.79V112ZM427.872 108.64C425.872 110 423.312 111.12 420.192 112C417.152 112.8 414.072 113.2 410.952 113.2C403.832 113.2 398.392 111.68 394.632 108.64C390.872 105.6 388.952 100.72 388.872 94V66.52H378.552V52H388.872V38.56L409.272 32.92V52H427.272V66.52H409.272V90.64C409.272 96 411.912 98.68 417.192 98.68C420.472 98.68 423.352 97.8 425.832 96.04L427.872 108.64ZM475.581 112C473.341 118.4 470.901 123.48 468.261 127.24C465.621 131 462.501 133.68 458.901 135.28C455.301 136.96 450.941 137.8 445.821 137.8C439.021 137.8 433.581 136.32 429.501 133.36L433.821 119.68C435.101 120.88 436.501 121.68 438.021 122.08C439.621 122.56 441.661 122.8 444.141 122.8C446.621 122.8 448.581 122.36 450.021 121.48C451.461 120.68 452.621 119.2 453.501 117.04L454.941 113.32L447.981 97L430.101 52H452.541L461.781 86.2L464.661 98.92L467.901 85.72L477.141 52H497.541L475.581 112ZM506.775 91.36C510.535 91.36 513.455 92.32 515.535 94.24C517.695 96.16 518.775 98.84 518.775 102.28C518.775 105.64 517.695 108.28 515.535 110.2C513.455 112.12 510.535 113.08 506.775 113.08C503.015 113.08 500.055 112.12 497.895 110.2C495.815 108.28 494.775 105.64 494.775 102.28C494.775 98.84 495.815 96.16 497.895 94.24C500.055 92.32 503.015 91.36 506.775 91.36Z" transform="translate(-4 -24)" fill="#3B3434"/>
                                                    </svg>
                                                </div>
                                            </div>
                                            <LocationSwitch />
                                        </div>
                                    </div>
                                    <div>
                                        <AddCafeModal_Container />
                                    </div>

                                    <div class='s_map_m'>
                                        <MapWrapperMobile />
                                    </div>
                                    <SortBar />

                                    <div class='s_main'>
                                        <CafeList />
                                    </div>
                                </div>
                            </div>

                            <div class='s_map'>
                                <MapWrapper />
                            </div>
                        </div>
                    </div>

                    <div class='s_user'>
                        <UserReduxForm_Container />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
