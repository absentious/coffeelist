import React, { Component } from 'react';
import '../App.css';
import CafeNeighborhood from './CafeNeighborhood';
import CafeAttributes from './CafeAttributes';
import CafeName from './CafeName';
import iconData from '../data/generalIcons.json';

class CafeItem extends Component {
    constructor () {
        super()

        this.state = {
            cafe: {},
            expanded: false
        }
    }

    componentWillMount() {
        this.setState({ cafe: this.props.cafe })
    }

    expand() {
        var tname = this.state.cafe.name;
        console.log(tname);
        var expandState = true;
        if (this.state.expanded == true) {
            expandState = false;
        }
        this.setState({ expanded: expandState })
    }

    displayExpandedVerticalSpace() {
        if (this.state.expanded == true) {
            return <div class='cafe_expandedVerticalSpace'></div>
        }
        return;
    }

    displayLeftPadding() {
        if (this.state.expanded == true) {
            return <div class='cafe_expandedPadding'></div>
        }
        return;
    }

    displayHorizontalAttributes() {
        if (this.state.expanded == false) {
            return <CafeAttributes 
                outlets={this.state.cafe.attributes.outlets}
                coffee={this.state.cafe.attributes.coffee}
                wifi={this.state.cafe.attributes.wifi}
                food={this.state.cafe.attributes.food}
                vertical={false}
            />;
        }
        return <div class='cafe_pad32'></div>;
    }

    displayVerticalAttributes() {
        if (this.state.expanded == true) {
            return <CafeAttributes 
                outlets={this.state.cafe.attributes.outlets}
                coffee={this.state.cafe.attributes.coffee}
                wifi={this.state.cafe.attributes.wifi}
                food={this.state.cafe.attributes.food}
                vertical={true}
            />;
        }
        return;
    }

    render () {

        return (
            <div class='cafeRow_container'>
                <div class='cafeRow' onClick={this.expand.bind(this)}>
                    <div class='cafeNeighborhood'>
                        <CafeNeighborhood neighborhood={this.state.cafe.neighborhood} />
                    </div>
                    <CafeName name={this.state.cafe.name}>
                        {this.displayVerticalAttributes()}
                    </CafeName>
                    {this.displayHorizontalAttributes()}
                    <div class='cafeArrow_container'>
                        <div class='cafeArrow'>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CafeItem;
