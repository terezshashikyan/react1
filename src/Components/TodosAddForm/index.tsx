import { FC, useState } from "react";
import { TTodosAddFormProps } from "../../types";

import "./style.scss";

const TodosAddForm: FC<TTodosAddFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form className="TodosAddForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="To Do Text"
        value={title}
        className="TodosAddForm__input"
        id="TodosAddFormInput"
        onChange={handleChange}
      />
      <button type="submit" className="TodosAddForm__button">
        Add
      </button>
    </form>
  );
};

export default TodosAddForm;
