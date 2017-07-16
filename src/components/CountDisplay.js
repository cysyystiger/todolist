import React, { Component } from 'react';

export default class CountDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.check = this.check.bind(this);
  }
  check() {
    this.props.checkboxes();
  }
  render() {
    return (
      <input type="checkbox" onClick={this.check} />);
  }
}
