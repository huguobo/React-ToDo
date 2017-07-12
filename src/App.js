import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

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