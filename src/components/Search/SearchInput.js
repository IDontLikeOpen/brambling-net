import React from 'react'

const SearchInput = ({ inputchange, inputtext }) => {
 return (
  <>
   <input type="text" placeholder="Search" className="search" value={ inputtext } onChange={ e => inputchange(e) } />
  </>
 )
}

export {SearchInput}
