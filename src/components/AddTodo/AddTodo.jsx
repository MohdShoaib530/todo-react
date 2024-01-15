import { useState } from 'react';
import './AddTodo.css'

function AddTodo({addTodo}){
    const [inputText,setInputText] = useState("");

    return(
        <div className="add-todo">
            <input
               type="text"
               placeholder="Add your next todo"
               value={inputText}
               onChange={e => setInputText(e.target.value)}
               />
            <button onClick={() => {
                addTodo({inputText}),
                setInputText('')
            }} >Add Todo</button>
        </div>
    )
}

export default AddTodo;