import React, { Component, createRef } from 'react';
import Child from './child'
import InputForward from './forward'
 

class Refs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.domRef = createRef()
        this.childRef = createRef()
        this.inputRef = createRef()
    }

    componentDidMount(){
        console.log(this.domRef);
        console.log(this.domRef.current.innerHTML);
        this.inputRef.current.focus()
    }
    handleChild(str){
        this.childRef.current.changeText(str)
    }
    render() { 
        return (
            <div>
                <h1 ref={this.domRef}>refs text</h1>
                <Child ref={this.childRef} />
                <button onClick={()=>this.handleChild('new text')}>修改child值</button>
                <InputForward ref={this.inputRef} />
            </div>
        );
    }
}
 
export default Refs;