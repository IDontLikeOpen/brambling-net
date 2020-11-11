import React from 'react';
import './App.scss';
import { Header } from '../Header';
import { Search } from '../Search';
import { Add } from '../Add';
import { List } from '../List';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Search />
      <Add />
      <List />
    </div>
  );
};

export { App };
