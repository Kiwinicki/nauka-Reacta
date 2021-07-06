import React from 'react';

const TodoInput = ({ inputValue, onChange, onClick }) => {
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => onChange(e)} />
      <button onClick={(value) => onClick(value)}>Dodaj</button>
    </>
  );
};

export default TodoInput;
