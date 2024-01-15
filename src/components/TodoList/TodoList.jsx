import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import './TodoList.css'

function TodoList({deleteTodo,editTodo,todoFinished}) {
  const list = useSelector((state) => state.todo);
  
  function onFinished(todo,isFinished){
    todoFinished({todo,isFinished})
  }

  function onDelete(todo) {
    deleteTodo({todo})
  }

  function onEdit(todo,todoText) {
    editTodo({todo,todoText})

  }

  return (
    <div className="todo-list">
      {list.todo.map((todo) => (
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
