import React from 'react';

const TodoList = ({ todo, onClick, removeOnClick }) => {
  if (todo == '') return <p>brak elementów.</p>;
  const todoItmes = todo.map((el, i) => (
    <li key={i}>
      <p>{el}</p>
      <button onClick={() => onClick(el)}>już umiem</button>
      <button onClick={() => removeOnClick(el)}>usuń</button>
    </li>
  ));

  return <ul>{todoItmes}</ul>;
};

TodoList.defaultProps = {
  todo: [],
};

export default TodoList;
