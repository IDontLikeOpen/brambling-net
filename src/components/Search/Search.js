import React from 'react'
import './Search.scss'
import {SearchActive} from './SearchActive';
import {SearchAll} from './SearchAll';
import {SearchDone} from './SearchDone';
import {SearchInput} from './SearchInput';

const Search = () => {
 return (
  <div className="search">
   <SearchInput/>
   <SearchAll/>
   <SearchActive/>
   <SearchDone/>
  </div>
 )
}

export { Search }
