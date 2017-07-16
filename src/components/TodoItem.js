import React, { Component } from 'react';

export default class TodoItem extends Component{
  constructor(props) {
    super(props);
    this.state = { title: '', item: '' };
    this.onItemBuild = this.onItemBuild.bind(this);
    this.onItemDelete = this.onItemDelete.bind(this);
    this.onItemChangeTitle = this.onItemChangeTitle.bind(this);
    this.onItemChangeItem = this.onItemChangeItem.bind(this);
  }
  onItemChangeTitle(title) { this.setState({ title }); }
  onItemChangeItem(item) { this.setState({ item }); }
  onItemBuild(event) {
    event.preventDefault();
    this.props.buildItem(this.state.title, this.state.item);
    this.setState({ title: '', item: '' }); }
  onItemDelete(event) {
    event.preventDefault();
    this.props.deleteItem(this.state.title, this.state.item);
    this.setState({ title: '', item: '' }); }
  render() {
    return (
      <div>
        <form onSubmit={this.onItemBuild} className="input-group-button">
          <button type="submit" className="btn btn-secondary" id="ai">
            Add Item
          </button>
        </form>
        <form onSubmit={this.onItemDelete} className="input-group-button">
          <button type="submit" className="btn btn-secondary" id="di">
            Delete Item
          </button>
        </form>
        <input
          id="oi"
          className="control-form"
          placeholder="Type Item Name"
          value={this.state.item}
          onChange={event => this.onItemChangeItem(event.target.value)}
        />
        <span> in </span>
        <input
          id="ni"
          className="control-form"
          placeholder="Type Title Name"
          value={this.state.title}
          onChange={event => this.onItemChangeTitle(event.target.value)}
        />
      </div>);
  }
}
