import React, {Component} from 'react'

class Todo extends Component{
  render(){
    return(
    <div>
      <li>{this.props.todo.text}</li>
      <button onClick={this.props.deleteTodo}>X</button>
    </div>
   )
  }
}

export default Todo;