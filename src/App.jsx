import { useDispatch } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo"
import { addTodo,deleteTodo,todoFinished,editTodo } from "./actions/todoActions";
import { bindActionCreators } from "redux";

function App() {

  const dispatch=useDispatch();
  const actions=bindActionCreators({addTodo,deleteTodo,todoFinished,editTodo},dispatch);
  return (
    <>
      {/* add the new todo */}
      <AddTodo addTodo={actions.addTodo}/>
      {/* printing the todo list  */}
      {/* agar actual list m finished ko change krna hai toh setList pass krna pdega as prop */}
      <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} />
    </>
  );
}

export default App;
