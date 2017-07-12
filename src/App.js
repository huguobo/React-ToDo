import React, { Component } from 'react';


class ToDoList extends Component{
      constructor(props){
        super(props);
        this.state={list:[1,2,3]};
        this.HandleChange=this.HandleChange.bind(this);
      }

      HandleChange(todo){
        var rows=this.state.list;
        rows.push(todo);
        this.setState(
            {list:rows}
        );
      }
      render(){
        return (
            <div>
                 <TodoNew onAdd={this.HandleChange} />
                 <ListTodo todo={this.state.list}  />
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
    render(){
      var  list=this.props.todo;
      const listItems = list.map((item,index) =>
      <li key={index.toString()}>
      {item.toString()}
      </li>
      );

      return (
       <ul>{listItems}</ul>
      );
    }
}

export default ToDoList;