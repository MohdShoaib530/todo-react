import { useReducer } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import todoReducer from "./reducers/todoReducer";
import todoDispatchContext from "./context/todoDispatchContext";

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ list }}>
      <todoDispatchContext.Provider value={{ dispatch }}>
        <AddTodo />
        <TodoList />
      </todoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
