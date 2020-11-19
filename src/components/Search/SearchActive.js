import React from 'react'

const SearchActive = ({ setfilter }) => {
 return (
  <>
   <button className="btn" onClick = { () => setfilter(1) }>Active</button>
  </>
 )
}

export {SearchActive}