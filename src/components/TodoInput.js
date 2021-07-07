import React from 'react';

const TodoInput = ({ inputValue, onChange, onClick }) => {
  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => onChange(e)} />
      <button className="addToListBtn" onClick={() => onClick()}>
        Dodaj
      </button>
    </>
  );
};

export default TodoInput;
