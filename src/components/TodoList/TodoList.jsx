import Todo from "../Todo/Todo";

function TodoList({ list, updateList }) {
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
            updateList(updatedList);
          }}
        />
      ))}
    </div>
  );
}

export default TodoList;
