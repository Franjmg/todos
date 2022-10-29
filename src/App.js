import { useState } from 'react';
import './App.css';
import CreateTodoButtom from './components/CreateTodoButton';
import TodoCounter from './components/TodoCounter';
import TodoItem from './components/TodoItem';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;

  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem)
  }

  return [
    item,
    saveItem,
  ];
}


function App() {

  /* const defaultTodos=[
    {text:'Practicar Guitarra', completed:false},
    {text:'Tomar el curso de intro a react', completed:false},
    {text:'Estudiar Base de Datos', completed:true},
    {text:'Ir al gym', completed:true}
  ]; */

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = useState('');
  
  // Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;

  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <div className='app center'>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />    
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />)
          )
        }
      </TodoList>
      <CreateTodoButtom /> 
    </div>
  );
}

export default App;
