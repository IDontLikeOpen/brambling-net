import React from 'react'

const SearchDone = ({ setfilter }) => {
 return (
  <>
   <button className="btn" onClick = { () => setfilter(2) }>Done</button>
  </>
 )
}

export {SearchDone}