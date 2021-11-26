import React from 'react';
import './TodoList.css'
import ListArray from './ListArray'

class TodoList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: ListArray
    }
  }

  addItem = (event) => {
    if(event.keyCode === 13) {
      this.state.list.push({todo: event.target.value})
      this.setState({list: this.state.list})
      event.target.value=''
    }
  }

  removeTodo = (event) => {
        const remainder = this.state.list.filter(item => item.todo !== event.target.innerText);
        this.setState({list: remainder});
    }

  render(){
    const {list} = this.state;
    return(
      <>
      <h1>Todo's</h1>
      <div className='container'>
        {
          list.map((item, i)=>{
            return <div onClick={this.removeTodo} className='todo' key={i}>{item.todo}</div>
          })
        }
        <div className='input-container'>
          <label className='add'>Add a new todo:</label><br/>
          <input type='text' onKeyUp={this.addItem}/>
        </div>
      </div>
      </>
    )
  }
}

export default TodoList;
// this.removeTodo = this.removeTodo.bind(this);
