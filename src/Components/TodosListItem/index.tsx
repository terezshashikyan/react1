import { TTodosListItem } from "../../types";
import { useState, FC } from "react";
import { EditRounded, ClearRounded, CheckRounded } from "@mui/icons-material";

import "./style.scss";

const TodosListItem: FC<TTodosListItem> = ({ todo, deleteTodo, editTodo, toggleCompleted}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const setIsEditingTrue = () => {
    setIsEditing(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };  

  const setIsEditingFalse = () => {
    editTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div key={todo.id} className= {todo.completed? 'todosListItem todosListItem__completed':'todosListItem'}>
      <button className="todosListItem__text">
        <input type="checkbox" checked = {todo.completed} onClick={() => toggleCompleted(todo.id)} className = 'todosListItem__checkbox'/>
        {isEditing ? (
          <input type="text" value={newTitle} onChange={handleChange} className = 'todosListItem__editItemInput'/>
        ) : (
          <span>{todo.title}</span>
        )}
      </button>
      {!isEditing ? (
        <button className="todosListItem__button" onClick={setIsEditingTrue}>
          <EditRounded />
        </button>
      ) : (
        <button className="todosListItem__button" onClick={setIsEditingFalse}>
          <CheckRounded />
        </button>
      )}
      <button
        className="todosListItem__button"
        onClick={() => deleteTodo(todo.id)}
      >
        <ClearRounded />
      </button>
    </div>
  );
};

export default TodosListItem;
