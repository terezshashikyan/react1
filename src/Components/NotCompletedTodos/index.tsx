import { FC } from "react";
import {ITodo, TTodosList} from "../../types";
import TodosListItem from "../TodosListItem";

import './style.scss';


const NotCompletedTodosList:FC<TTodosList> = ({todos, deleteTodo, editTodo, toggleCompleted}) => {   
    
    const todosListRenderer = todos.filter((td)=>!td.completed).map((td: ITodo) => (<TodosListItem todo = {td} deleteTodo = {deleteTodo} editTodo = {editTodo} toggleCompleted = {toggleCompleted}/>));

    return (
        <section className = 'todosList'>
         {todosListRenderer}
        </section>
    )
}

export default NotCompletedTodosList;