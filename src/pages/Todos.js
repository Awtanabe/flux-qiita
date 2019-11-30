import React, {Component} from 'react'
import { EventEmitter } from "events";
import Todo from '../components/todo'

class Todos extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {
          id: 113464613,
          text: "Go Shopping",
          complete: false
        },
        {
          id: 235684679,
          text: "Pay Bills",
          complete: false
        }
      ]
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