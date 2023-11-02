import {ITodo, TTodosList} from "../../types";
import { FC, useState } from "react";
import {ArrowDropDownRounded, ArrowDropUpRounded} from '@mui/icons-material';
import TodosListItem from "../TodosListItem";

import './style.scss';


const CompletedTodosList:FC<TTodosList> = ({todos, deleteTodo, editTodo, toggleCompleted}) => { 
    const [open, setOpen] = useState(true)
    
    const todosListRenderer = todos.filter((td)=>td.completed).map((td: ITodo) => (<TodosListItem todo = {td} deleteTodo = {deleteTodo} editTodo = {editTodo} toggleCompleted = {toggleCompleted}/>));
    
    const toggleShowTodos = () => setOpen(!open);
    return (
        <section className = 'todosList'>
         <div className = 'todosList__show' onClick = {toggleShowTodos}>
         <h4>Completed Todos</h4>
         {open?<ArrowDropDownRounded/>:<ArrowDropUpRounded/>}
         </div>
         {open? todosListRenderer:null}
        </section>
    )
}

export default CompletedTodosList;