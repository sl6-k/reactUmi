import React, { Component } from 'react';

export default class ComponentOld extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: {
                id: 1
            }
        };
        // this.handleClick = this.handleClick.bind(this)
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        console.log(props);
        console.log(state);
        return state
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
        return 'getSnapshotBeforeUpdate'
    }

    componentDidUpdate(props, state, snapshot) {
        console.log(snapshot + '----');
    }
    handleClick = () => {
        this.setState({
            text: {
                id: 2
            }
        })
    }

    // shouldComponentUpdate(props, state){
    //   console.log('shouldComponentUpdate');
    //   console.log(props);
    //   console.log(state);
    //   if(state.text == 'demo-new' && this.state.text != state.text){
    //     return true
    //   }
    //     return false
    // }
    render() {
        console.log('render');
        return ( <
            div onClick = { this.handleClick } >
            Component - old--{ this.state.text.id } <
            /div>
        )
    }
}