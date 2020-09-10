import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import style from './todo.module.scss';
import './todo.css';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className={style.icons}>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className={style.delete__icon} />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className={style.edit__icon}
        />
      </div>
    </div>
  ));
};

export default Todo;
