import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoItem from './TodoItem';
import CountDisplay from './CountDisplay';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [{ title: '', item: [] }], count: 0 };
  }
  buildTitle(value) {
    this.setState({ list: [...this.state.list, { title: value, item: [] }] });
  }
  deleteTitle(value) {
    const a = this.state.list;
    for (let i = 1; i < a.length; i++) {
      if (a[i].title === value) {
        a.splice(i,1);
      }
    }
    this.setState({ list: a });
  }
  fixTitle(ot, nt) {
    const a = this.state.list;
    for (let i = 1; i < a.length; i++) {
      if (a[i].title === ot) {
        a[i].title = nt;
      }
    }
    this.setState({ list: a });
  }
  buildItem(title, item) {
    const a = this.state.list;
    for (let i = 1; i < a.length; i++) {
      if (a[i].title === title) {
        a[i].item = [...a[i].item, item];
      }
    }
    this.setState({ list: a });
  }
  deleteItem(title, item) {
    const a = this.state.list;
    for (let i = 1; i < a.length; i++) {
      if (a[i].title === title) {
        for (let j = 0; j < a[i].item.length; j++) {
          if (a[i].item[j] === item) {
            a[i].item.splice(j, 1);
          }
        }
      }
    }
    this.setState({ list: a });
  }
  checkboxes() {
    const inputElems = document.getElementsByTagName('input');
    let count = 0;
    for (let i = 0; i < inputElems.length; i++) {
      if (inputElems[i].type === 'checkbox' && inputElems[i].checked === true) { count++;}
    }
    this.setState({ count: count });
  }
  rendertodolist=(arr)=>{
    return <ul id="ful">{arr.map(this.rendertitle)}</ul>;
  }
  rendertitle=(fdtitle)=>{
    if (fdtitle.title !== '') {
      return <li key={fdtitle.title}>{fdtitle.title}<ul>{fdtitle.item.map(this.renderitem)}</ul></li>;
    }
  }
  renderitem=(item)=>{
    if (item !== '') {
      return <li key={item}><CountDisplay checkboxes={() => this.checkboxes()} />{item}</li>;
    }
  }
  renderuncount=(num)=>{
    let count = 0;
    for (let i = 1; i < this.state.list.length; i++) {
      count = count + this.state.list[i].item.length;
    }
    return count - num;
  }
  rendercount=(num)=>{ return num; }
  render() {
    return (<div><p>Finished:<span id="f"> {this.rendercount(this.state.count)} </span>Unfinished:<span id="u">
      {this.renderuncount(this.state.count)} </span></p>
      <TodoList
        buildTitle={value => this.buildTitle(value)}
        deleteTitle={value => this.deleteTitle(value)}
        fixTitle={(ot, nt) => this.fixTitle(ot, nt)}
      />
      <TodoItem
        buildItem={(title, item) => this.buildItem(title, item)}
        deleteItem={(title, item) => this.deleteItem(title, item)}
      />
      {this.rendertodolist(this.state.list)}
    </div>
    );
  }
}
