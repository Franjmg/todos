import React from 'react';
import './App.css';
import CreateTodoButtom from './components/CreateTodoButton';
import TodoCounter from './components/TodoCounter';
import TodoItem from './components/TodoItem';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';

function App() {

  const defaultTodos=[
    {text:'Practicar Guitarra', completed:false},
    {text:'Tomar el curso de intro a react', completed:false},
    {text:'Estudiar Base de Datos', completed:true},
    {text:'Ir al gym', completed:true}
  ];

  // Estado inicial de nuestros TODOs
  const [todos, setTodos] = React.useState(defaultTodos);
  // Cantidad de TODOs completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;

  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = React.useState('');

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
          />)
          )
        }
      </TodoList>
      <CreateTodoButtom /> 
    </div>
  );
}

export default App;
