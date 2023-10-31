import './style.scss';

const TodosAddForm = () => {
    return (
       <form className='TodosAddForm'>
        <input type="text" placeholder = 'To Do Text' className="TodosAddForm__input" />
        <button className="TodosAddForm__button">Add</button>
       </form> 
    )
}

export default TodosAddForm;
