import { useState } from "react"

function Todo({todoData,isFinished,changeFinished,onDelete,onEdit}){
    const [finished,setFinished] = useState(isFinished);
    const [isEditing,setIsediting] = useState(false);
    const [editText,setEditText] = useState('');
    return (
        <div>
            <input type="checkbox"  checked={finished}
               onChange={(e) => {setFinished(e.target.checked)
                changeFinished(e.target.checked)
            }} 
              
            />
            {(isEditing) ? <input type="text" onChange={e => setEditText(e.target.value)}/> : <span>{todoData}</span>}
            <button onClick={() => {
                setIsediting(!isEditing)
                onEdit(editText)
            }}>{(!isEditing) ? "Edit" : "save" }</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}

export default Todo;