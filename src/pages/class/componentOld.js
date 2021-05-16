import React, { Component, PureComponent } from 'react';

export default class ComponentOld extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: {
        id: 1
      }
    };
    // this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  componentDidMount(){
    console.log('componentDidMount');
  }
  handleClick = ()=>{
    this.setState({
      text: {
        id: 2
      }
    })
  }
  componentWillUpdate(){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
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
    return (
      <div onClick={this.handleClick}>
          Component-old --{this.state.text.id}
      </div>
    )
  }
}