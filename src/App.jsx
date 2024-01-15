import { useDispatch } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList"; 
import { bindActionCreators } from "redux";
import {addtodo,deletetodo,edittodo,finishtodo } from "./Actions/todoActions";


function App() {
  const dispatch = useDispatch();
  const actions = bindActionCreators({addtodo,deletetodo,edittodo,finishtodo},dispatch);

  return (
    <>
      <AddTodo addTodo={actions.addtodo}/>
      <TodoList deleteTodo={actions.deletetodo} editTodo={actions.edittodo} finishTodo={actions.finishtodo}/>
    </>
  )
}
export default App;
