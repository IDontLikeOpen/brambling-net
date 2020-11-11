import React from 'react'
import './List.scss'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = () => {
 const arr = ['Clean room', 'Wash clothes', 'Pay rent', 'Feed the fish', 'Procrastinate']

 return (
   <div className="list">
    {arr.map((el, index)=>
      <div className="list-item" key={index}>
        {el}
        <div className="buttons">
        <button className="btn btn-delete" key={index}><FontAwesomeIcon icon={faTrash} />
</button>
        <button className="btn btn-bold" key={index}>!</button>
        </div>
      </div>
    )}
   </div>
 )
}

export { List }
