import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    let todo = [];
    let done = [];

    if (JSON.parse(localStorage.getItem('todo')) !== null)
      todo = JSON.parse(localStorage.getItem('todo'));
    if (JSON.parse(localStorage.getItem('done')) !== null)
      done = JSON.parse(localStorage.getItem('done'));

    this.state = {
      todo: todo,
      done: done,
      inputValue: '',
    };
  }

  render() {
    return (
      <>
        <h1>Nauka Reacta</h1>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.inputHandler}
          />
          <button onClick={this.addTodoElement.bind(this)}>Dodaj</button>
        </div>
        <div>
          <h2>TO DO list:</h2>
          <this.TodoList />
        </div>
        <div>
          <h2>DONE list:</h2>
          <this.DoneList />
        </div>
      </>
    );
  }

  inputHandler = (event) => {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue });
  };

  addTodoElement = () => {
    if (this.state.inputValue == '') return; // w przyszłości można dać regex
    this.state.todo.push(this.state.inputValue);
    this.setState({ todo: this.state.todo, inputValue: '' });

    localStorage.setItem('todo', JSON.stringify(this.state.todo));
  };

  TodoList = () => {
    if (this.state.todo == '') return <p>brak elementów.</p>;

    const todoElements = this.state.todo.map((el, i) => (
      <li key={i} className="todoElement">
        <p>{el}</p>
        <button onClick={() => this.moveToDoneList(el)}>już umiem</button>
      </li>
    ));

    return <ul>{todoElements}</ul>;
  };

  DoneList = () => {
    if (this.state.done == '') return <p>brak elementów.</p>;

    const doneElements = this.state.done.map((el, i) => (
      <li key={i} className="doneElement">
        {el}
      </li>
    ));
    return <ul>{doneElements}</ul>;
  };

  moveToDoneList(el) {
    const index = this.state.todo.indexOf(el);

    this.state.todo.splice(index, 1);
    this.setState({ todo: this.state.todo });
    localStorage.setItem('todo', JSON.stringify(this.state.todo));

    this.state.done.push(el);
    this.setState({ done: this.state.done });
    localStorage.setItem('done', JSON.stringify(this.state.done));
  }
}

export default TodoList;
