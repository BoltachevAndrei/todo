import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import TodoList from '../todo-list';
import ItemAddForm from "../item-add-form";
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.createTodoItem = this.createTodoItem.bind(this);
    this.applySearch = this.applySearch.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.maxId = 100;
    this.state = {
      todoData: [
        this.createTodoItem(`Drink Coffee`),
        this.createTodoItem(`Make Awesome App`),
        this.createTodoItem(`Have a lunch`)
      ],
      search: ``,
      filter: `all`
    };
  };

  createTodoItem(label) {
    return {
      label: label,
      done: false,
      important: false,
      id: this.maxId++
    };
  };

  deleteItem(id) {
    console.log(`del ${id}`);
    this.setState(({todoData}) => {
      const index = todoData.findIndex((element) => element.id === id);
      const newTodoData = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];
      return {todoData: newTodoData};
    });
  }

  addItem(text) {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      const newArray = [
        ...todoData,
        newItem
      ];
      return {
        todoData: newArray
      };
    });
  }

  toggleProperty(array, id, propertyName) {
    const index = array.findIndex((element) => element.id === id);
    const oldItem = array[index];
    const newItem = {...oldItem, [propertyName]: !oldItem[propertyName]};
    const newArray = [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1)
    ]
    return newArray;
  };

  onToggleDone(id) {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, `done`)
      };
    });
  };

  onToggleImportant(id) {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleProperty(todoData, id, `important`)
      };
    });
  };

  applySearch(search) {
    console.log(search);
    this.setState({search});
  }

  applyFilter(filter) {
    this.setState({filter});
  }

  search(data, text) {
    return data.filter((item) => item.label.toLowerCase().includes(text.toLowerCase()));
  }

  filter(data, type) {
    switch (type) {
      case `all`:
        return data;
      case `active`:
        return data.filter((item) => !item.done);
      case `done`:
        return data.filter((item) => item.done);
      default:
        return data;
    }
  }

  render() {
    const {todoData, search, filter} = this.state;
    const todoCount = todoData.filter((element) => !element.done).length;
    const doneCount = todoData.filter((element) => element.done).length;
    const visibleItems = this.filter(this.search(todoData, search), filter);
    return (
      <div>
        <AppHeader toDo={todoCount} done={doneCount} />
        <SearchPanel
          onSearchChange={this.applySearch}
          search={search}
        />
        <ItemStatusFilter
          filter={filter}
          onFilterChange={this.applyFilter}
        />
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm
          onItemAdded={this.addItem}
        />
      </div>
    );

  }
};
