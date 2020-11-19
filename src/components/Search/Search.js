import React, { useState } from 'react'
import './Search.scss'
import {SearchActive} from './SearchActive';
import {SearchAll} from './SearchAll';
import {SearchDone} from './SearchDone';
import {SearchInput} from './SearchInput';

const Search = ({ inputchange, setfilter, inputtext }) => { 
 return (
  <div className="search">
   <SearchInput inputchange={inputchange} inputtext = { inputtext } />
   <SearchAll setfilter = { setfilter } />
   <SearchActive  setfilter = { setfilter }/>
   <SearchDone setfilter = { setfilter }/>
  </div>
 )
}

export { Search }
