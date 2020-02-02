import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import './app.css';

const App = () => {
  const todoData = [
    {label: `Drink Coffee`, important: false, id: 0},
    {label: `Make Awesome App`, important: true, id: 1},
    {label: `Have a lunch`, important: false, id: 2},
  ];
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  );
};

export default App;
