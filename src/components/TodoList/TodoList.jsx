import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";

function TodoList() {
  const {list,setList} = useContext(TodoContext)
  
  function onFinished(todo,isFinished){
    const updatedList = list.map((t) => {
      if (t.id == todo.id) {
       todo.finished = isFinished;
      }
      return t;
   });
   setList(updatedList);
  }

  function onDelete(todo) {
    const updatedList = list.filter(t => t.id != todo.id);
    setList(updatedList)
  }

  function onEdit(todo,todoText) {
    const updatedList = list.map((t) => {
      if (t.id == todo.id) {
       todo.todoData = todoText;
      }
      return t;
   });
   setList(updatedList);
  }

  return (
    <div>
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
