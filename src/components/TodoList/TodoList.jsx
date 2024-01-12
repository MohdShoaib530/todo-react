import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";
import todoDispatchContext from "../../context/todoDispatchContext";
import './TodoList.css'

function TodoList() {
  const {list} = useContext(TodoContext);
  const {dispatch} = useContext(todoDispatchContext)
  
  function onFinished(todo,isFinished){
    dispatch({type:'finish_todo', payload:{todo,isFinished}})
  }

  function onDelete(todo) {
    dispatch({type:'delete_todo', payload:{todo}})
  }

  function onEdit(todo,todoText) {
    dispatch({type:'edit_todo', payload:{todo,todoText}})

  }

  return (
    <div className="todo-list">
      {list.map((todo) => (
        <Todo
          id={todo.id}
          isFinished={todo.finished}
          todoData={todo.todoData}
          key={todo.id}
          changeFinished={(isFinished) => onFinished(todo,isFinished)}
          onDelete={() => onDelete(todo)}
          onEdit={(todoText) => onEdit(todo,todoText)}
        />
      ))}
    </div>
  );
}

export default TodoList;
