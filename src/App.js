import React, { Fragment } from 'react';
import style from './App.module.scss';

import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className={style.todo__app}>
      <TodoList />
    </div>
  );
}

export default App;
