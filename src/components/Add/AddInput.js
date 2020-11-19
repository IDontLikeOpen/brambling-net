import React from 'react'

const AddInput = ({ inputchange, inputtext }) => {
 return (
  <>
   <input type="text" className="Search" value={ inputtext } onChange = { (e) => inputchange(e) } />
  </>
 )
}

export {AddInput}
