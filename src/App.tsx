import './App.scss';
import TodosHeader from './Components/TodosHeader';
import TodosAddForm from './Components/TodosAddForm';
import TodosList from './Components/TodosList';

function App() {
  return (
    <div className="Todos container">
     <TodosHeader/>
     <TodosAddForm/>
     <TodosList/>
    </div>
  );
}

export default App;
