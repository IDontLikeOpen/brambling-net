import React, { useState } from 'react';
import './App.scss';
import { Header } from '../Header';
import { Search } from '../Search';
import { Add } from '../Add';
import { List } from '../List';

const App = () => {
  const [todos, setTodos] = useState([
  {id:1, value:'Clean room', done:false, urgent:false},
  {id:2, value:'Wash clothes', done:true, urgent:true},
  {id:3, value:'Pay rent', done:false, urgent:true},
  {id:4, value:'Feed the fish', done:true, urgent:false},
  {id:5, value:'Procrastinate', done:true, urgent:false}
  ])

  const [filters, setFilters] = useState({value: '',filter: 0})
  
  const inputChange = (e) => {
    setFilters(prev => ({ ...prev, value : e.target.value }))
  }
  
  const setFilter = (filter) => {
    setFilters(prev => ({ ...prev, filter : filter }))
  }

  const doneToggle = id => {
    setTodos(prev => prev.map(todo => todo.id===id ? {...todo, done:!todo.done } : todo))
     // setTodos(prevState => ({ 
    //   arrayvar: [...prevState.arrayvar, newEl ]
    // }))
  }

  const urgentToggle = id => {
    setTodos(prev => prev.map(todo => todo.id===id ? {...todo, urgent:!todo.urgent } : todo))
  }

  const deleteTodo = id => {
    setTodos(prev => prev.filter( todo => todo.id!==id ))
    setTodos(prev => prev.map(todo => todo.id>id ? {...todo, id:todo.id-1 } : todo))
  }

  const addTodo = value => {
    setTodos(prev => [...prev, { id : prev.length+1, value : value, done : false, urgent : false }])
  }
  
  const searchTodo = () => {
    switch (filters.filter) {
      case 0:
        return todos.filter( todo => todo.value.toUpperCase().includes(filters.value.toUpperCase()) )            
      case 1:
        return todos.filter( todo => todo.value.toUpperCase().includes(filters.value.toUpperCase())  && !todo.done )            
      case 2:
        return todos.filter( todo => todo.value.toUpperCase().includes(filters.value.toUpperCase())  && todo.done )            
      default:
        break;
    }
  }

  return (
    <div className="app-container">
      <Header />
      <Search inputchange={ inputChange } setfilter = { setFilter } inputtext = { filters.value } />
      <Add addtodo = {addTodo} />
      <List todos={searchTodo()} deletetodo={deleteTodo} urgenttoggle={urgentToggle} donetoggle = {doneToggle} />
    </div>
  );
};

export { App };