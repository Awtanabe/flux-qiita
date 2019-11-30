import {EventEmitter} from "events"
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter{
  constructor(){
    super()
    this.todos = [
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

  createTodo(text){
    const id = Date.now();
    this.todos.push({
      id,
      text,
      complete: false
    })

    this.emit("change")
  }

  deleteTodo(id){
   const index = this.todos.findIndex((todo) => id == todo.id)
   this.todos.splice(index, 1)
   this.emit("change")
  } 

  getAll(){
    return this.todos;
  }


  handleAction(action){
    switch(action.type){
      case "CREATE_TODO":{
        this.createTodo(action.text)
      }
      case "DELETE_TODO":{
        this.deleteTodo(action.id)
      }
    }
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore))
window.dispatcher = dispatcher;
export default todoStore;