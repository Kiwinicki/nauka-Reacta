import React from 'react';

const TodoList = ({ todo, onClick, removeOnClick }) => {
  if (todo == '') return <p>brak elementów.</p>;
  const todoItmes = todo.map((el, i) => (
    <li key={i} className="listItem">
      {el}
      <button className="iKnowItAlreadyBtn" onClick={() => onClick(el)}>
        już umiem
      </button>
      <button className="removeBtn" onClick={() => removeOnClick(el)}>
        usuń
      </button>
    </li>
  ));

  return <ul>{todoItmes}</ul>;
};

TodoList.defaultProps = {
  todo: [],
};

export default TodoList;
