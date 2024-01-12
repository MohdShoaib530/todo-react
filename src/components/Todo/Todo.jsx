import { useState } from "react";
import "./Todo.css";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
  const [finished, setFinished] = useState(isFinished);
  const [isEditing, setIsediting] = useState(false);
  const [editText, setEditText] = useState("");
  return (
    <div className="todo">
      <span className="work-status">{finished ? '✅' : '❌'}</span>
      <input
        type="checkbox"
        checked={finished}
        onChange={(e) => {
          setFinished(e.target.checked);
          changeFinished(e.target.checked);
        }}
      />
      <button
        onClick={() => {
          setIsediting(!isEditing);
          onEdit(editText);
        }}
      >
        {!isEditing ? "Edit" : "save"}
      </button>
      <button onClick={onDelete}>Delete</button>
        {isEditing ? (
          <input type="text" onChange={(e) => setEditText(e.target.value)} />
        ) : (
          <span className="text-work">{todoData}</span>
        )}
    </div>
  );
}

export default Todo;
