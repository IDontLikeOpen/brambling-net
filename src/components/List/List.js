import React from 'react'
import './List.scss'
import { ListItem } from './ListItem';

const List = ({todos, deletetodo, urgenttoggle, donetoggle}) => {
 return (
   <div className="list">
    {todos.map((el)=>
    <ListItem el = {el} key = {el.id} deletetodo = {deletetodo} urgenttoggle = {urgenttoggle} donetoggle = { donetoggle } />  
    )}
   </div>
 )
}

export { List }
