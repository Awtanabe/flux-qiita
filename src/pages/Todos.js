import React, {Component} from 'react'
import { EventEmitter } from "events";
import Todo from '../components/todo'
import TodoStore from '../stores/TodoStore'

class Todos extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: TodoStore.getAll()
    }
  }


  render(){
    const todos = this.state.todos
    const TodoComments = todos.map((todo)=> {
      return <Todo key={todo.id} {...todo}/>
    })
    return(
      <div>
        <h1>Todos</h1>
        {TodoComments}
      </div>  
    )
  }
}

export default Todos;