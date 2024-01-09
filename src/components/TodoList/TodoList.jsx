import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import { useContext } from "react";

function TodoList() {
  const {list,setList} = useContext(TodoContext)
  return (
    <div>
      {list.map((todo) => (
        <Todo
          id={todo.id}
          isFinished={todo.finished}
          todoData={todo.todoData}
          key={todo.id}
          changeFinished={(isFinished) => {
            const updatedList = list.map((t) => {
               if (t.id == todo.id) {
                todo.finished = isFinished;
               }
               return t;
            });
            setList(updatedList);
          }}
          onDelete= {() => {
            const updatedList = list.filter(t => t.id != todo.id);
            setList(updatedList)
          }}
          onEdit={(todoText) => {
            const updatedList = list.map((t) => {
              if (t.id == todo.id) {
               todo.todoData = todoText;
              }
              return t;
           });
           setList(updatedList);
          }}
        />
      ))}
    </div>
  );
}

export default TodoList;
