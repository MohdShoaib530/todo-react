import Todo from "../Todo/Todo";

function TodoList({list}){
    

    return (
        <div>
            {list.map((todo) => <Todo todoData={todo.todoData} key={todo.id}/>)}
        </div>
    )
}

export default TodoList;