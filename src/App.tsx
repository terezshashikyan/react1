import axios from "axios";
import { ITodo } from "./types";
import { useState, useEffect } from "react";
import TodosHeader from "./Components/TodosHeader";
import TodosAddForm from "./Components/TodosAddForm";
import CompletedTodosList from "./Components/CompletedTodosList";
import NotCompletedTodosList from "./Components/NotCompletedTodos";
import LoadMoreTodosButton from "./Components/LoadMoreTodosButton";

import "./App.scss";

const TodosApp = () => {
  const [todos, setTodos] = useState<ITodo[] | []>([]);
  const [todosAmountLimit, setTodosAmountLimit] = useState(6);

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos",
  });

  useEffect(() => {
    client.get(`?_limit=${todosAmountLimit}`).then((response) => {
      setTodos(response.data);
    });
  }, [todosAmountLimit]);

  const addTodo = (title: string) => {
    client
      .post("", {
        userId: 1,
        id: Math.random(),
        title: title,
        completed: false,
      })
      .then((response) => {
        setTodos([response.data, ...todos]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = (id: number) => {
    client.delete(`${id}`).catch((error) => {
      console.log(error);
    });
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const editTodo = (id: number, newTitle: string) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });

    setTodos(editedTodos);
  };

  const toggleCompleted = (id: number) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(editedTodos);
  };

  const handleLoadMore=()=> {
    setTodosAmountLimit(todosAmountLimit + 6);
  }

  return (
    <div className="Todos container">
      <TodosHeader />
      <TodosAddForm addTodo={addTodo} />
      <NotCompletedTodosList
        todos={todos.slice(1, todosAmountLimit)}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleCompleted={toggleCompleted}
      />
      <CompletedTodosList
        todos={todos.slice(1, todosAmountLimit)}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleCompleted={toggleCompleted}
      />
      <LoadMoreTodosButton handleLoadMore={handleLoadMore}/>
    </div>
  );
};

export default TodosApp;
