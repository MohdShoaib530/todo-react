import { useDispatch } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList"; 
import { bindActionCreators } from "redux";
import {addTodo,deleteTodo,editTodo,todoFinished} from "./Slices/todoSlice";

function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch);

  return (
    <>
      <AddTodo addTodo={actions.addTodo}/>
      <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished}/>
    </>
  )
}
export default App;
