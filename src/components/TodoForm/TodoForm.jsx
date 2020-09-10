import React, { useState, useEffect, useRef } from 'react';
import s from './s.module.scss';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const heandleChange = (e) => {
    setInput(e.target.value);
  };
  const heandleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput('');
  };
  return (
    <form className={s.todo} onSubmit={heandleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="update your Item"
            value={input}
            className={s.todo__input__edit}
            onChange={heandleChange}
            ref={inputRef}
          />
          <button className={s.todo__btn} onClick={heandleSubmit}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            className={s.todo__input}
            onChange={heandleChange}
            ref={inputRef}
          />
          <button className={s.todo__btn} onClick={heandleSubmit}>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
