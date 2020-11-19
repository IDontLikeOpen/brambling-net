import React from 'react'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = ({el,deletetodo, urgenttoggle, donetoggle}) => {
 return (
  <div className="list-item">
   <span onClick={() => donetoggle(el.id) } className = {(el.done?'done ':'')+(el.urgent?'urgent':'')}>{el.value}</span>
   <div className="buttons">
   <button className="btn btn-delete" onClick={ () => deletetodo(el.id) } ><FontAwesomeIcon icon={faTrash}/></button>
   <button className="btn btn-bold" onClick={ () => urgenttoggle(el.id) }>!</button>
   </div>
  </div>
 )
}

export {ListItem}