import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        {/* this is to render the nested routes*/}
      </div>
    );
  }
}
