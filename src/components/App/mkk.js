// import React, {useState } from 'react';
// import './App.scss';
// import { Header } from '../Header';
// import { Search } from '../Search';
// import { Add } from '../Add';
// import { List } from '../List';

// const App = () => {
//  const [todos, setTodos] = useState([
//   {id:1, value:'Clean room', done:false, urgent:false},
//   {id:2, value:'Wash clothes', done:true, urgent:true},
//   {id:3, value:'Pay rent', done:false, urgent:true},
//   {id:4, value:'Feed the fish', done:true, urgent:false},
//   {id:5, value:'Procrastinate', done:true, urgent:false}
//   ])

//   const doneToggle = id => {
//     let arr = todos
//     arr.map(el => el.id===id ? el.done=!el.done : '')
//     setTodos(arr)
//     console.log(todos);
//   }

//   const urgentToggle = id => {
//     let arr = todos
//     arr.map(el => el.id===id ? el.urgent=!el.urgent : '')
//     setTodos(arr)
//   }

//   const deleteTodo = id => {
//     let arr = todos
//     arr.filter(el => el.id!==id )
//     for(let i = 1; i < arr.length+1; i++)
//     todos[i-1].id = i
//     setTodos(arr)
//   }

//   const addTodo = value => {
//     console.log('add '+id);
//     setTodos([...todos, { id : todos.length, value : value, done : false, urgent : false }])
//   }

//   return (
//     <div className="app-container">
//       <Header />
//       <Search />
//       <Add addtodo = {addTodo} />
//       <List todos={todos} deletetodo={deleteTodo} urgenttoggle={urgentToggle} donetoggle = {doneToggle} />
//     </div>
//   );
// };

// export { App };
