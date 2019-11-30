import React, {Component} from 'react'
import { EventEmitter } from "events";
import Todo from '../components/todo'
import TodoStore from '../stores/TodoStore'
import * as TodoActions from '../actions/TodoActions'

class Todos extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: TodoStore.getAll()
    }
  }
  
  // storeが変更されるとgetAllをし直す reduxだと自動で見てくれるよね
  componentDidMount(){
    TodoStore.on("change", ()=>{
      this.setState({
        todos: TodoStore.getAll()
      })
    })
  }

  createTodo(){
     TodoActions.createTodo("New todo")
  }

  render(){
    const todos = this.state.todos
    const TodoComments = todos.map((todo)=> {
      return <Todo key={todo.id} {...todo}/>
    })
    return(
      <div>
        <button onClick={()=> this.createTodo()}>add todo</button>
        <h1>Todos</h1>
        {TodoComments}
      </div>  
    )
  }
}

export default Todos;