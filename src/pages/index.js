import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'umi';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>classDemo</h1>
        <List>
          <List.Item>
            <Link to="/class/componentOld">component-old</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/componentNew">component-new</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/lists">component-lists</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/dva">component-dva</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/context">component-context</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/lazy-load">component-lazy-load</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/modal">component-modal</Link>
          </List.Item>
          <List.Item>
            <Link to="/class/refs">component-refs</Link>
          </List.Item>
        </List>
      </div>
    )
  }
}