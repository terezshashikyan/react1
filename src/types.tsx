export interface ITodo {
            userId: number,
            id: number,
            title: string,
            completed: boolean
  };

export interface ITodosList {
             todos: ITodo[];
   };

export type TTodosAddFormProps ={
    addTodo: (title: string)=>void;
}

export type TTodosListItem = {
    deleteTodo: (id: number)=>void;
    editTodo: (id: number, title: string)=>void;
    toggleCompleted: (id: number) =>void;
    todo: ITodo;
}

export type TTodosList = {
    deleteTodo: (id: number)=>void;
    editTodo: (id:number, title: string)=>void;
    toggleCompleted: (id: number) =>void;
    todos: ITodo[];
}

export type TLoadMoreTodosButton = {
    handleLoadMore: () => void;
}