import React, { useState } from 'react'
import './Add.scss'
import {AddBtn} from './AddBtn';
import {AddInput} from './AddInput';

const Add = ({ addtodo }) => {
 const [input, setInput] = useState('')
 
 const inputChange = (e) => {
  setInput(e.target.value)
 }

 const addClick = () => {
  addtodo(input)
 }

 return (
  <div className="add">
   <AddInput inputchange={ inputChange } inputtext = { input }/>
   <AddBtn addclick = { addClick } />
  </div>
 )
}

export { Add }