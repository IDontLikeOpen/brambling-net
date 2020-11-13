import React, {useState } from 'react';
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

  const doneToggle = id => {
    console.log('done '+id);
    let arr = todos
    arr.map(el => 
      el.id===id ? el.done=!el.done : ''      
    )
    setTodos(arr)
    // console.log(arr)
    // console.log(todos[id-1].id+' __');
    // todos.map(el => el.id===id ? el.done=!el.done : {})
  }

  const urgentToggle = id => {
    console.log('urg '+id);
    // todos.map(el => el.id===id ? el.urgent=!el.urgent : {})
  }

  const deleteTodo = id => {
    console.log('delete '+id);
    let arr = todos
    arr.filter(el => el.id!==id )
    for(let i = 1; i < arr.length+1; i++)
    todos[i-1].id = i
    setTodos(arr)
    // console.log(todos);
  }

  const addTodo = value => {
    console.log('add '+id);
    // todos.push({ id : todos.length, value : value, done : false, urgent : false })
  }
  
  const searchTodo = filter => {
    console.log('filter '+id);
    // todos.push({ id : todos.length, value : value, done : false, urgent : false })
  }

  return (
    <div className="app-container">
      <Header />
      <Search searchtodo = {searchTodo} />
      <Add addtodo = {addTodo} />
      <List todos={todos} deletetodo={deleteTodo} urgenttoggle={urgentToggle} donetoggle = {doneToggle} />
    </div>
  );
};

export { App };
