import React, { Component } from 'react';
import SearchContext from './searchnContext'

class Consumer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <SearchContext.Consumer>
                    {({state, dispatch})=>(
                        <h1 onClick={()=>dispatch({
                            type: 'TEXT',
                            payload: 'consumer text'
                        })}>consumer: {state.text}</h1>
                    )}
                </SearchContext.Consumer>
            </div>
        );
    }
}
 
export default Consumer;