// import './App.css';
import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import Timer from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);

    let todo = JSON.parse(localStorage.getItem('todo')) || [];
    let done = JSON.parse(localStorage.getItem('done')) || [];

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
          <TodoInput
            inputValue={this.state.inputValue}
            onChange={(e) => this.handleInput(e)}
            onClick={(value) => this.addTodoElement(value)}
          />
          <h2>TO DO list:</h2>
          <TodoList
            todo={this.state.todo}
            onClick={(el) => this.moveToDoneList(el)}
            removeOnClick={(el) => this.removeItem(el, 'todo')}
          />
        </div>
        <div>
          <h2>DONE list:</h2>
          <DoneList
            done={this.state.done}
            removeOnClick={(el) => this.removeItem(el, 'done')}
          />
        </div>
        <Timer />
      </>
    );
  }

  componentDidCatch(err, info) {
    console.log(new Error(err, info));
  }

  handleInput(event) {
    const newValue = event.target.value;
    this.setState({ inputValue: newValue });
  }

  addTodoElement(inputValue) {
    if (inputValue == '') return; // w przyszłości można dać regex
    // Right way (bez mutowania stanu tylko skopiowanie i dodanie nowego elem)
    this.setState({
      todo: [...this.state.todo, this.state.inputValue],
      inputValue: '',
    });
    localStorage.setItem('todo', JSON.stringify(this.state.todo));
    // Wrong way (z mutowaniem stanu)
    // this.state.todo.push(this.state.inputValue);
    // this.setState({ todo: this.state.todo, inputValue: '' });
  }

  moveToDoneList(el) {
    const index = this.state.todo.indexOf(el);
    const todoCopy = [...this.state.todo];
    todoCopy.splice(index, 1);
    this.setState({ todo: todoCopy, done: [...this.state.done, el] });
    localStorage.setItem('todo', JSON.stringify(todoCopy));
    localStorage.setItem('done', JSON.stringify([...this.state.done, el]));
  }

  removeItem(el, whatList) {
    const index = this.state[whatList].indexOf(el);
    const listCopy = [...this.state[whatList]];
    listCopy.splice(index, 1);
    this.setState({ [whatList]: listCopy });
    localStorage.setItem(whatList, JSON.stringify(listCopy));
  }
}

export default App;
