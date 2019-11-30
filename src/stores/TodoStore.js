import {EventEmitter} from "events"

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

  getAll(){
    return this.todos;
  }


  handleAction(action){
    console.log("todo store recieved", action)
  }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleAction.bind(todoStore))
export default todoStore;