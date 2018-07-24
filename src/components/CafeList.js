import React, { Component } from 'react';
import '../App.css';
import listData from '../data/sfData.json'
import CafeItem from './CafeItem';

class CafeList extends Component {
    constructor () {
        super()
    }

    componentWillMount() {

    }

    render () {

        return (
            <div class='s_list'>
                {listData.cafes.map(item => <CafeItem cafe={item} />)}
            </div>
        )
    }
}

export default CafeList 
