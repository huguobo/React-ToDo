import React, { Component } from 'react';

class ToDoList extends Component{
  constructor(props){
    super(props);
    this.state={list:[]};
    this.HandleChange=this.HandleChange.bind(this);
    this.HandleDelete=this.HandleDelete.bind(this);
  }

  HandleChange(todo){
    var rows=this.state.list;
    rows.push(todo);
    this.setState(
      {list:rows}
      );
  }

  HandleDelete(index){
    this.state.list.splice(index, 1);
    this.setState({lists: this.state.lists});
  }

  render(){
    return (
      <div>
      <TodoNew onAdd={this.HandleChange} />
      <ListTodo todo={this.state.list} deleteList={this.HandleDelete} />
      </div>
      );
  }

};

class TodoNew extends Component{
  constructor(props){
    super(props);
    this.state={inputText:''};
  }
  addTodo(e){
    if(this.state.inputText){
      this.props.onAdd(this.state.inputText);
    }
  }
  changeInput(e){
    this.setState({inputText:e.target.value});  
  }
  render () {
    return (
      <div>
      <input type="text" onChange={this.changeInput.bind(this)}/>
      <button onClick={this.addTodo.bind(this)} >添加事项</button>
      </div>
      );
  }
}

class ListTodo extends Component{   
  constructor(props){
    super(props);
    this.handleDelete=this.handleDelete.bind(this);
  }
  handleDelete(e){
    const index=e.target.getAttribute("id")
    this.props.deleteList(index);
  }
  render(){
    const list=this.props.todo;      
    const listItems = list.map((item,index) =>
      <li key={index.toString()}>
      {item.toString()}{"   "}
      <FinishTodo /> {"   "} 
      <button id={index.toString()} onClick={this.handleDelete}>删除</button>    
      </li>
      );
    return (
     <ul>{listItems} </ul>
     );
  }
}

class FinishTodo extends Component{
  constructor(props){
    super(props);
    this.hanldeFinish=this.hanldeFinish.bind(this);
    this.state={isfinish:false};
  }
  hanldeFinish(){
    this.setState({isfinish:!this.state.isfinish});
  }
  render(){
    const isfinish=this.state.isfinish;
    return (
      <span><input type="checkbox" checked={isfinish} onClick={this.hanldeFinish} /> {isfinish?(<span>Done</span>):(<span>Doing</span>)}</span>
      );
  }
}



export default ToDoList;