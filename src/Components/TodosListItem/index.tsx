import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import './style.scss';

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

const TodosListItem = ({userId, id, title, completed}: ITodo) => {
    return (
        <div className='todosListItem'>
        <button className='todosListItem__text'>
            <input type="checkbox" name="" id="" />
             {title}
        </button>
        <button className='todosListItem__button'>
        <EditRoundedIcon/>
        </button>
        <button className='todosListItem__button'>
        <ClearRoundedIcon/>
        </button>
        </div>
    )
}

export default TodosListItem;