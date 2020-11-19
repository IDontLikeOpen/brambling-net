import React from 'react'

const SearchAll = ({ setfilter }) => {
 return (
  <>
   <button className="btn" onClick = { () => setfilter(0) }>All</button>
  </>
 )
}

export {SearchAll}
