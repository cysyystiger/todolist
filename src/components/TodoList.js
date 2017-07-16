import React, { Component } from 'react';

export default class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state = { bd: '', ot: '', rt: '' };
    this.onTitleBuild = this.onTitleBuild.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTitleDelete = this.onTitleDelete.bind(this);
    this.onTitleFix = this.onTitleFix.bind(this);
    this.onTitleot = this.onTitleot.bind(this);
    this.onTitlent = this.onTitlent.bind(this);
  }
  onTitleChange(bd) { this.setState({ bd }); }
  onTitleBuild(event) {
    event.preventDefault();
    this.props.buildTitle(this.state.bd);
    this.setState({ bd: '' });
  }
  onTitleDelete(event) {
    event.preventDefault();
    this.props.deleteTitle(this.state.bd);
    this.setState({ bd: '' });
  }
  onTitleot(ot) { this.setState({ ot }); }
  onTitlent(nt) { this.setState({ nt }); }
  onTitleFix(event) {
    event.preventDefault();
    this.props.fixTitle(this.state.ot, this.state.nt);
    this.setState({ ot: '', nt: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onTitleBuild}>
          <button type="submit" className="btn btn-secondary" id="bl">
            Build List
          </button>
        </form>
        <form onSubmit={this.onTitleDelete}>
          <button type="submit" className="btn btn-secondary" id="dl">
            Delete List
          </button>
        </form>
        <input
          id="bd"
          placeholder="Type Todolist Title"
          value={this.state.bd}
          onChange={event => this.onTitleChange(event.target.value)}
        />
        <form onSubmit={this.onTitleFix} className="input-group-button">
          <button type="submit" className="btn btn-secondary" id="rp">
            Replace
          </button>
          <input
            id="ot"
            className="control-form"
            placeholder="Type Old Title"
            value={this.state.ot}
            onChange={event => this.onTitleot(event.target.value)}
          />
          <span> with </span>
          <input
            id="nt"
            className="control-form"
            placeholder="Type New Title"
            value={this.state.nt}
            onChange={event => this.onTitlent(event.target.value)}
          />
        </form>
      </div>
    );
  }
}
