function Todo({todoData}){
    return (
        <div>
            <input type="checkbox" />
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Todo;