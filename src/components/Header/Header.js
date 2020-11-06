import React from 'react';
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Todo List</h1>
      <p className="header__info">
        0 done 0 more
      </p>
    </div>
  );
};

export { Header };
