import { TODOS } from "./constants";
import TodosListItem from "../TodosListItem";

import './style.scss';

const TodosList = () => {
    const todosListRenderer = TODOS.map((td) => (<TodosListItem {...td}/>))
    return (
        <section className = 'todosList'>
         {todosListRenderer}
        </section>
    )
}

export default TodosList;