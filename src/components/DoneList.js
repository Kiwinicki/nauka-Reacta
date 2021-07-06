import React from 'react';

const DoneList = ({ done, removeOnClick }) => {
  if (done == '') return <p>brak elementów.</p>;

  const doneElements = done.map((el, i) => (
    <li key={i}>
      {el}
      <button onClick={() => removeOnClick(el)}>usuń</button>
    </li>
  ));
  return (
    <>
      <ul>{doneElements}</ul>
    </>
  );
};

DoneList.defaultProps = {
  done: [],
};

export default DoneList;
