import React from 'react'
import './Add.scss'
import {AddBtn} from './AddBtn';
import {AddInput} from './AddInput';

const Add = () => {
 return (
  <div className="add">
   <AddInput/>
   <AddBtn/>
  </div>
 )
}

export { Add }
