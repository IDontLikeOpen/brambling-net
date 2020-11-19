import React from 'react'

const AddBtn = ({ addclick }) => {
 return (
  <>
   <button className="btn" onClick = { () => addclick() }>Add Item</button>
  </>
 )
}

export {AddBtn}
